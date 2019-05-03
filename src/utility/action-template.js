const applyActionTemplate = (contextObj, config) => {
    const all = {
        contextObj, config
    }
    return {
        fetch: (criteria) => ({ type: `FETCH_${contextObj.actionContext.PLURAL}`, criteria: criteria , all: all}),
        add: () => ({ type: `ADD_${contextObj.actionContext.SINGULAR}`, all: all }),
        close: () => ({ type: `CLOSE_${contextObj.actionContext.SINGULAR}`, all: all}),
        save: (entity) => ({ type: `SAVE_${contextObj.actionContext.SINGULAR}`, entity: entity, all: all }),
        deleteEntity: (id) => ({ type: `DELETE_${contextObj.actionContext.SINGULAR}`, id: id , all: all})
    }
}

export default applyActionTemplate