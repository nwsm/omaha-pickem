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
  },
  postBracket: async function(bracket, id) {
    var db = firebase.firestore()
    db.settings({timestampsInSnapshots: true})
    var vm = this
    let setDoc
    if(id){
      setDoc = db.collection('brackets').doc(id).set(bracket)
      return bracket.uid
    }
    else {
      setDoc = await db.collection('brackets').doc().set(bracket)
      return vm.findBracket(bracket.uid)
    }
  },
  findBracket: async function(uid) {
    var results = []
    var db = firebase.firestore()
    db.settings({timestampsInSnapshots: true})

    var bracketsRef = db.collection('brackets');
    var queryRef = bracketsRef.where('uid', '==', uid);
    var r = await queryRef.get()
    r.forEach((doc) => {
      results.push( {id:doc.id, data:doc.data()} )
    })
    return results
  },
  getBracket: async function(bracketId) {
    var db = firebase.firestore()
    db.settings({timestampsInSnapshots: true})
    var bracketRef = await db.collection('brackets').doc(bracketId);
    var doc = await bracketRef.get()

    if (!doc.exists) {
      return null
    } else {
      return({id:doc.id, data:doc.data()});
    }

  }
}
