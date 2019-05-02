const applyActionTemplate = (contextObj) => {
    return {
        fetch: (criteria) => ({ type: `FETCH_${contextObj.actionContext.PLURAL}`, criteria: criteria , context: contextObj.actionContext.singular}),
        add: () => ({ type: `ADD_${contextObj.actionContext.SINGULAR}` , context: contextObj.actionContext.singular}),
        close: () => ({ type: `CLOSE_${contextObj.actionContext.SINGULAR}`, context: contextObj.actionContext.singular }),
        save: (entity) => ({ type: `SAVE_${contextObj.actionContext.SINGULAR}`, entity: entity, context: contextObj.actionContext.singular }),
        deleteEntity: (id) => ({ type: `DELETE_${contextObj.actionContext.SINGULAR}`, id: id , context: contextObj.actionContext.singular })
    }
}

export default applyActionTemplate