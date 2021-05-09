var Entidade = {

  create: async function (objeto){
    let ent = await Entidade.create(objeto);
    console.log(ent);
    }
  ,
  ler: async function (){
  let ent = await Entidade .findall();
  console.log(ent);
   }
,
atualizar: async function (novonome, id){
  const novo = await Entidade.findByPk(id);
  await novo.update({nome : '${novonome}'});
   }
,
deletar: async function (id){
  const object = await Entidade.findByPk(id);
  let ent = await object.destroy();
  console.log(ent);
    }
  }

module.exports = Entidade;