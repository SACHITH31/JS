const pokemonMainContainer = document.querySelector('.pokemonsContainer')


fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
  .then((data) => {
    return data.json()
  })
  .then((data) => {
    return data.results
  })
  .then((data) => {


//search functionality
    const searchInput = document.querySelector(".searchInput")
    searchInput.addEventListener('input', (e) => {
      const searchTerm = searchInput.value.toLowerCase()
      const allPokemonsContainer = document.querySelectorAll('.pokemonContainer')

      allPokemonsContainer.forEach((pokemonContainerSearch) => {
        const allText = pokemonContainerSearch.innerText.toLowerCase()

        if (!allText.includes(searchTerm)) {
          pokemonContainerSearch.classList.add('hidden');
        } else {
          pokemonContainerSearch.classList.remove('hidden');
        }
      });
    });



    // console.log(data)
    data.forEach((element, i) => {
      const pokemonContainer = document.createElement('div')
      pokemonContainer.className = "pokemonContainer"
      pokemonMainContainer.append(pokemonContainer)
      const pokemonDetailsContainer = document.createElement('div')
      pokemonDetailsContainer.className = "pokemonDetailsContainer"
      pokemonContainer.append(pokemonDetailsContainer)

      fetch(element.url)
        .then((data) => {
          return data.json()
        })
        .then((data) => {

//pokemon name
          let pokemonName = document.createElement('p')
          pokemonName.className = `${data.name} pokemonName`
          pokemonName.innerText = `Name: ${data.name}`
          pokemonDetailsContainer.appendChild(pokemonName)

//pokemon height
          const pokemonHeight = document.createElement('p')
          pokemonHeight.className = "pokemonHeight"
          pokemonHeight.innerText = `Height: ${data.height}`
          pokemonDetailsContainer.append(pokemonHeight)

//pokemon abilities
          const pokemonAbilitiesArray = data.abilities
          // console.log(pokemonAbilitiesArray)
          let pokemonAbilitiesContainer = []
          for (let i = 0; i < pokemonAbilitiesArray.length; i++) {
            pokemonAbilitiesContainer.push(pokemonAbilitiesArray[i].ability.name)
          }
          // console.log(pokemonAbilitiesContainer)
          const pokemonAbilities = document.createElement('p')
          pokemonAbilities.className = "pokemonAbilities"
          if (pokemonAbilitiesContainer.length === 1) {
            pokemonAbilities.innerText = `Ability: ${pokemonAbilitiesContainer}`
          } else {
            pokemonAbilities.innerText = `Abilities: ${pokemonAbilitiesContainer}`
          }
          pokemonDetailsContainer.append(pokemonAbilities)

          //pokemon types
          const pokemonTypesArray = data.types
          // console.log(pokemonTypesArray)
          let pokemonTypesContainer = []
          for (let i = 0; i < pokemonTypesArray.length; i++) {
            pokemonTypesContainer.push(pokemonTypesArray[i].type.name)
          }
          const pokemonTypes = document.createElement('p')
          pokemonTypes.className = "pokemonTypes"
          pokemonTypes.innerText = `Types: ${pokemonTypesContainer}`
          pokemonDetailsContainer.append(pokemonTypes)

//pokemon weight
          const pokemonWeight = document.createElement('p')
          pokemonWeight.classList = "pokemonWeight"
          pokemonWeight.innerText = `Weight: ${data.weight}`
          pokemonDetailsContainer.append(pokemonWeight)

//pokemon id
          const pokemonId = document.createElement('p')
          pokemonId.className = "pokemonId"
          pokemonId.innerText = `Id: ${data.id}`
          pokemonDetailsContainer.append(pokemonId)

//pokemon image
          const pokemonImageDiv = document.createElement('div')
          pokemonImageDiv.className = "pokemonImageContainer"
          pokemonContainer.append(pokemonImageDiv)

          const pokemonImage = document.createElement('img')
          pokemonImage.className = "pokemonImage"
          pokemonImage.src = data.sprites.other.dream_world.front_default
          pokemonImageDiv.append(pokemonImage)
          // console.log(data.sprites.other.dream_world.front_default)
        })
    });
  })
