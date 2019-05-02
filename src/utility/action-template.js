const applyActionTemplate = (actionTypePlural, actionTypeSingular) => {
    return {
        fetch: (criteria) => ({ type: `FETCH_${actionTypePlural}`, criteria: criteria , context: actionTypeSingular}),
        add: () => ({ type: `ADD_${actionTypeSingular}` , context: actionTypeSingular}),
        close: () => ({ type: `CLOSE_${actionTypeSingular}`, context: actionTypeSingular }),
        save: (entity) => ({ type: `SAVE_${actionTypeSingular}`, entity: entity, context: actionTypeSingular }),
        deleteEntity: (id) => ({ type: `DELETE_${actionTypeSingular}`, id: id , context: actionTypeSingular })
    }
}

export default applyActionTemplate