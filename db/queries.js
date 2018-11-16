const knex= require('./knex');

module.exports = {
  getAll(){
    return knex('awsback')
  },
  getOne(id){
    return knex('awsback').where('id',id).first()
  },
  create(item){
    return knex('awsback').insert(item, '*')
  }
}