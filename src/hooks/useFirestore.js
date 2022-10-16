import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    succes: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [res, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    // collection ref
    const ref = projectFirestore.collection(collection)

    // add documemt
    const addDocument = (doc) => { }

    // delete documemt
    const deleteDocument = (id) => { }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, deleteDocument, res }
}
