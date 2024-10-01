import { JOB_API_ENDPOINT } from "@/lib/utis/constant"
import { setSingleJob } from "@/redux/jobSlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"


const useGetSingleJob = (jobId) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchSingleJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.jobs))
                    console.log(res.data.jobs);

                }
            } catch (error) {
                console.log(error);

            }
        }
        fetchSingleJobs();

    }, [])
}

export default useGetSingleJob