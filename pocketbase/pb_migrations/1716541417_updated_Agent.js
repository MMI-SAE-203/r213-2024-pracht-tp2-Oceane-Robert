/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yikv6wqwcmna3bk")

  collection.name = "agent"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yikv6wqwcmna3bk")

  collection.name = "Agent"

  return dao.saveCollection(collection)
})
