import { Job } from "../models/job.model.js";



export const postJob = async (req, res) => {
    try {
        const { title, description, companyId, jobType, salary, requirements, experience, position, location } = req.body;
        const userId = req.id;
        if (!title || !description || !companyId || !jobType || !salary || !requirements || !experience || !position || !location) {
            return res.status(400).json({
                message: "something is missing",
                success: false
            })
        }
        const job = await Job.create({
            title,
            description,
            company: companyId,
            jobType,
            salary: Number(salary),
            requirements: requirements.split(","),
            experienceLevel: experience,
            noOfPositions: position,
            createdBy: userId,
            location
        })
        return res.status(200).json({
            message: "New Job created successfully",
            job,
            success: true
        })

    } catch (error) {
        console.log(error);

    }
}

// For student
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };
        // const jobs = await Job.find(query);

        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createdAt: -1 });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

// For student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        // const job = await Job.findById(jobId);
        const job = await Job.findById(jobId).populate({
            path: "applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}

// For Admin's jobs
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        // const jobs = await Job.find({ created_by: adminId });
        const jobs = await Job.find({ createdBy: adminId }).populate({
            path: 'company',
            createdAt: -1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}