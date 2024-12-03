const asyncHandler = require("express-async-handler")
const Jobs = require("../models/Jobs")
const Resume = require("../models/Resume")
const JobApplication = require("../models/jobApplication")

exports.getAllJobs = asyncHandler(async (req, res) => {
    const result = await Jobs.find()
    res.status(200).json({message:"Jobs Fetch Success",result})
})


exports.getJobDetails = asyncHandler(async (req, res) => {
  const { jobId:_id } = req.params;
  // console.log(jobId);
  const result = await Jobs.find({ _id });
  // console.log(job);

    // if (!job) {
    //     return res.status(404).json({ error: 'Job not found' });
    // }

    res.status(200).json({ message: 'Job detail fetch success', result });
});

exports.createResume = asyncHandler(async (req, res) => {
//   const { userId } = req.user; // Assuming you have user information stored in req.user
  const {
    name,
    email,
    education,
    experience,
    '10thPercentage': tenthPercentage,
    '12thPercentage': twelfthPercentage,
    stream,
    graduationAggregate,
    achievements,
    projects,
    activities,
    skills,
  } = req.body;

  // Verify if all required fields are present
  // if (!name || !email || !education || !experience || !tenthPercentage || !twelfthPercentage || !stream || !graduationAggregate || !achievements || !projects || !activities || !skills) {
  //   res.status(400).json({ message: 'All fields are required' });
  //   return;
  // }

  // Create the resume using Resume.create
  try {
    const newResume = await  Resume.create({
    //   userId,
      name,
      email,
      education,
      experience,
      '10thPercentage': tenthPercentage,
      '12thPercentage': twelfthPercentage,
      stream,
      graduationAggregate,
      achievements,
      projects,
      activities,
      skills,
    });

    res.status(201).json(newResume);
  } catch (error) {
    res.status(500).json({ message: 'Error saving resume' });
  }
});
exports.createJobApplication = asyncHandler(async (req, res) => {
  const { jobId, userId } = req.body;

  const jobApplication = await JobApplication.create({ jobId, userId });

  res.status(201).json({ success: true, jobApplication });
});




