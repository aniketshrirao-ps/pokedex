import axios from 'axios';
import placeholderImg from '../assets/image/placeholder.png';
import placeholderImg1 from '../assets/image/placeholder1.png';
import { API_URL } from '../constants';
export const pokeGender = ['Male', 'Female', 'Genderless'];
export const statMarks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 210,
        label: '210',
    },
];

// getPokemons
export const getPokemons = async () => {
    try {
        const response = await axios.get(`${API_URL}pokemon`);
        if (response.status === 200) {
            const pokemons = response.data.results;
            const uniquePokemons = removeDuplicates(pokemons);
            return uniquePokemons;
        }
    } catch (error) {
        console.error(error);
    }
}

// get pokemon types labels
export const getPokeTypesLabel = async () => {
    return await getFilterLabel('type').then((data) => {
        return data;
    });
};

// get pokemon gender labels
export const getPokeGendersLabel = async () => {
    return await getFilterLabel('gender').then((data) => {
        return data;
    });
};

// get pokemon stats labels
export const getPokeStatsLabel = async () => {
    return await getFilterLabel('stat').then((data) => {
        return data;
    });
};

// get filters based labels
const getFilterLabel = async (filter) => {
    try {
        const set = new Set();
        const response = await axios.get(`${API_URL}${filter}`);
        if (response.status === 200) {
            const types = response.data.results;
            types.forEach((poke) => {
                if (!set.has(poke.name)) {
                    const idURL = poke.url;
                    const splittedUrl = idURL.split('/');
                    const id = splittedUrl[splittedUrl.length - 2];
                    poke = {
                        name: poke.name,
                        number: id,
                    };
                    set.add(poke);
                }
            });
            return [...set];
        }
    } catch (error) {
        console.error(error);
    }
}

// get pokemons filtered by categories/filter
export async function getFilteredPokemonByCategory(category, filter) {
    const apiURL = category === "type" ? `${API_URL}type` : `${API_URL}gender`;
    const categoriesOfPokemon = await getCategoriesOfPokemon(apiURL);
    //filtering categoriesOfPokemon based on given filter
    const urlsOfFilteredCategoriesOfPokemon = [];
    const setOfFilteredCategoryNames = new Set();
    //add names in filter object to the set data structure to improve time complexity
    filter.forEach((filterObject) => {
        setOfFilteredCategoryNames.add(filterObject.name.toLowerCase());
    });
    // data gets stored in urlsOfFilteredCategoriesOfPokemon after calling below function
    // using below function we will get an array of URLs
    getURLsOfFilteredCategoriesOfPokemon(
        categoriesOfPokemon,
        setOfFilteredCategoryNames,
        urlsOfFilteredCategoriesOfPokemon
    );

    const resultsOfPokemon = [];

    for (const url of urlsOfFilteredCategoriesOfPokemon) {
        const pokemonArrayForCurrentURL = await axios.get(url);
        if (category === "type")
            resultsOfPokemon.push(pokemonArrayForCurrentURL.data.pokemon);
        else
            resultsOfPokemon.push(
                pokemonArrayForCurrentURL.data.pokemon_species_details
            );
    }
    return removeDuplicates(resultsOfPokemon, category);
}

//  removes duplicate pokemons from a list
function removeDuplicates(array, category) {
    const type = category === "type" ? "pokemon" : "pokemon_species";
    const set = new Set();
    const uniquePokemon = [];
    if (!category) {
        array.forEach((poke) => {
            if (!set.has(poke.name)) {
                const idURL = poke.url;
                const id = idURL.substring(34, idURL.length - 1);
                poke = {
                    [type]: {
                        name: poke.name,
                        number: leftPad(id, 3),
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
                    },
                };
                uniquePokemon.push(poke[type]);
                set.add(poke[type].name);
            }
        });
    } else {
        array.forEach((pokeArray) => {
            pokeArray.forEach((poke) => {
                if (!set.has(poke[type].name)) {
                    const idURL = poke[type].url;
                    const id =
                        category === "type"
                            ? idURL.substring(34, idURL.length - 1)
                            : idURL.substring(42, idURL.length - 1);
                    poke = {
                        [type]: {
                            ...poke[type],
                            number: leftPad(id, 3),
                            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
                        },
                    };
                    uniquePokemon.push(poke[type]);
                    set.add(poke[type].name);
                }
            });
        });
    }
    return uniquePokemon;
}

async function getCategoriesOfPokemon(apiURL) {
    return (await axios.get(apiURL)).data.results;
}

// to call an individual url from general api
async function getURLsOfFilteredCategoriesOfPokemon(
    categoriesOfPokemon,
    set,
    urlArray
) {
    categoriesOfPokemon.forEach((categoryObject) => {
        if (set.has(categoryObject.name)) {
            //if set has the category then extract its url
            urlArray.push(categoryObject.url);
        }
    });
};

// get unique pokemons from multiple filters
export function getUniqueBetweenFilters(typeData, genderData) {
    let unique = [];
    unique = typeData.filter(type => {
        return genderData?.some(gender => {
            return type.name === gender.name;
        });
    });
    if (genderData.length <= 0) {
        return typeData;
    } else if (typeData.length <= 0) {
        return genderData;
    }
    return unique;
}

// common util function for padding zeros
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

async function getPokeTypeDamageFrom(names) {
    try {
        const response = await axios.get(`${API_URL}type/`);
        const types = response.data.results;
        return names.map(async (name) => {
            const indTypeUrl = types.filter((type) => type.name === name)[0].url;
            const responseData = await axios.get(indTypeUrl);
            const damageFrom = responseData.data.damage_relations.double_damage_from;
            return damageFrom.map((weakAgainst) => weakAgainst.name);
        })

    } catch (error) {
        console.error(error);
    }
}

// get pokeDetails
export async function getPokeDetails(id) {
    try {
        const response = await axios.get(`${API_URL}pokemon/${id}/`);
        const description = await axios.get(`${API_URL}pokemon-species/${id}/`);
        if (response.status === 200 || description.status === 200) {
            const { egg_groups, flavor_text_entries } = description.data;
            const { abilities, stats, types, weight, height } = response.data;
            const detailTypes = getFormattedDetailTypes(types);
            const detailAbilities = getFormattedDetailAbilities(abilities);
            const detailStats = getFormattedDetailStats(stats);
            const detailEggGroup = getFormattedDetailEggGroup(egg_groups);
            const detailWeight = getFormattedWeight(weight);
            const detailHeight = getFormattedHeight(height);
            const detailDesc = getFormattedDesc(flavor_text_entries);
            return {
                types: detailTypes,
                abilities: detailAbilities,
                stats: detailStats,
                eggGroup: detailEggGroup,
                height: detailHeight,
                weight: detailWeight,
                desc: detailDesc,
            };
        }
    } catch (error) {
        console.error(error);
    }
}

const getFormattedDetailTypes = (types) => {
    return types.map((data) => data.type.name);
}

const getFormattedDetailAbilities = (abilities) => {
    return abilities.map((data) => data.ability.name).join(', ');
}

const getFormattedDetailStats = (stats) => {
    return stats.map((data) => ({
        name: data.stat.name,
        value: data.base_stat,
    }))
}

const getFormattedDetailEggGroup = (eggGroups) => {
    return eggGroups.map((eggGroup) => eggGroup.name).join(', ');
}

const getFormattedWeight = (weight) => {
    return `${weight / 10} kg`;
}

const getFormattedHeight = (height) => {
    let feet = Math.floor(((height * 0.393700) / 12));
    let inches = Math.round((((height * 0.393700) / 12) - feet) * 12);
    return `${Math.floor(height * 0.308)}'${inches}"`;
}

const getFormattedDesc = (descList) => {
    const list = new Set(descList.map(desc => {
        let description = '';
        if (desc.language.name === 'en') {
            return description += desc?.flavor_text;
        }
    }))
    return ([...list].join(''));
}

export const getFormattedWeakAgainst = async (types) => {
    const damageFrom = getPokeTypeDamageFrom(types);
    const data = await damageFrom;
    const arr = await Promise.all(data);
    return arr.flat();
}

function getImageById(id) {
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    // if (!image) {
    //     image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    //     if (!image) {
    //         image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.svg`;
    //     }
    // }
    return image;
}
