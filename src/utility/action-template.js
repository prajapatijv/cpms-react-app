const applyActionTemplate = (actionTypePlural, actionTypeSingular) => {
    return {
        fetch: (criteria) => ({ type: `FETCH_${actionTypePlural}`, criteria: criteria }),
        add: () => ({ type: `ADD_${actionTypeSingular}` }),
        close: () => ({ type: `CLOSE_${actionTypeSingular}` }),
        save: (entity) => ({ type: `SAVE_${actionTypeSingular}`, entity: entity }),
        deleteEntity: (id) => ({ type: `DELETE_${actionTypeSingular}`, id: id })
    }
}

export default applyActionTemplate