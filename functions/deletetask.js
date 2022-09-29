const FaunaService = require('@brianmmdev/faunaservice')

exports.handler = async (event, context) => {
  const service = new FaunaService("fnAExpeBsfACTGZOC54_nPyhKjZYBqMDfEEzgqww")

  let body = JSON.parse(event.body)

  let tasks = await service.deleteRecord('Tasks', body.id)
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Authorization, Content-Type',
      'Content-Type': 'application/json'
    },
  }
}
