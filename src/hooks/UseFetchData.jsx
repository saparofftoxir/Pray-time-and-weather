import axios from 'axios'
import React, { useEffect, useState } from 'react'
function    useFetchDatas(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSeccess] = useState(false)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            axios.get(url)
                .then(res => {
                    setData(res.data)
                    setIsSeccess(true)
                    setIsError("")
                    setIsLoading(false)
                })
                .catch(err => {
                    setIsError("Error fetching data")
                    setIsSeccess(false)
                    setIsLoading(false)
                })
        }
        fetchData()
    }, [url])

    return { data, isLoading, isError, isSuccess }
}

export default useFetchDatas;