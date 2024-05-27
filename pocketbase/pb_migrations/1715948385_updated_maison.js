/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rv28856lfscmmzm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "32fgxtmm",
    "name": "agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yikv6wqwcmna3bk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rv28856lfscmmzm")

  // remove
  collection.schema.removeField("32fgxtmm")

  return dao.saveCollection(collection)
})
