import express from 'express'
import { authorizeRoles, isAuthenticated } from '../middleware/auth'
import { updateUserProgress,getUserProgressDashboard } from '../controllers/userProgress.controller'

const progressRouter = express.Router()

progressRouter.post('/update-user-progress',isAuthenticated,updateUserProgress)
progressRouter.get('/dashboard/:courseId', isAuthenticated, getUserProgressDashboard);

export default progressRouter
