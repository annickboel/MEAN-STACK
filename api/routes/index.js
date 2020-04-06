import defaultRoute from './_default'
import errorHandler from '../middlewares/error-handler'
import pangolinRoute from './pangolinRoute'

export default (app) => {
  app.use('/api/v0', [
    pangolinRoute
  ])
  
  app.use(errorHandler)
  //app.use(defaultRoute)
}