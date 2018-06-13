import firebase from 'firebase'

export default {
  getBrackets: async function() {
    var results = []
    var db = firebase.firestore()

    db.settings({timestampsInSnapshots: true})
    var r = await db.collection('brackets').get()

    r.forEach((doc) => {
      results.push({id:doc.id, data:doc.data()});
    });

    return results
  }
}
