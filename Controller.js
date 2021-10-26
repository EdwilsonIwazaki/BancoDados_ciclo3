const express = require('express');
const cors = require('cors');

const models=require('./models');//constante q diz q podemos acessar a pasta models

const app=express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;//vai associar a classe criada Cliente
let itempedido = models.ItemPedido;//vai associar a cada classe criada
let pedido = models.Pedido;//vai associar a cada classe criada
let servico = models.Servico;//vai associar a cada classe criada

app.get('/',function(req,res){//app.get, exibe na tela
    res.send('olá mundo')
});



//Insere dados serviços atraves do postman
app.post('/servicos',async(req,res)=>{
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Serviço criado com sucesso !'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'foi impossivel se conectar.'

        })
    });
});


//Insere dados clientes atraves do postman
app.post('/clientes',async(req,res)=>{
    await cliente.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Serviço criado com sucesso !'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'foi impossivel se conectar.'

        })
    });
});


// //Insere dados item Pedido atraves do postman
app.post('/itempedido',async(req,res)=>{
    await itempedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'item criado com sucesso !'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'foi impossivel se conectar.'

        })
    });
});

// //Insere dados Pedido atraves do postman
app.post('/pedidos',async(req,res)=>{
    await pedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Pedido criado com sucesso !'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'foi impossivel se conectar.'

        })
    });
});




app.get('/clientes',function(req,res){//app.get, exibe na tela
    res.send('Seja bem-vindo(a) a ServicesTI')
});

app.get('/servicos',function(req,res){//app.get, exibe na tela
    res.send('Seja bem-vindo(a) a area de serviços')
});

app.get('/pedidos',function(req,res){//app.get, exibe na tela
    res.send('Seja bem-vindo(a) a area de pedidos')
});


let port=process.env.PORT || 3001

app.listen(port,(req,res)=>{
    console.log('servidor ativo: http://localhost:3001');
})


// insere os dados dos serviços no banco de dados
// app.get('/servicos',async(rec,res)=>{
//     await servico.create({
//         nome: "HTML/CSS",
//         descricao: "Páginas estáticas estilizadas",
//         creatAt: new Date(),
//         updateAt: new Date()
//     })
//     res.send('Serviço criado com sucesso');
// });


// app.get('/servicos',async(rec,res)=>{
//     await servico.create({
//         nome: "Delphi",
//         descricao: "Manutenção e suporte a sistemas legados em Delphi",
//         creatAt: new Date(),
//         updateAt: new Date()
//     })
//     res.send('Serviço criado com sucesso');
// });


// insere os dados dos clientes no banco de dados
// app.get('/clientes',async(req,res)=>{
//     await cliente.create({
//         nome: "Edwilson Iwazaki",
//         endereco: "Rua Rio Beni, 121A",
//         cidade: "Maringá0",
//         uf: "PR",
//         nascimento: 1973/06/20,
//         clienteDesde: 2021/10/01,
//         creatAt: new Date(),
//         updateAt: new Date()
//     })
//     res.send('Cliente criado com sucesso');
// });

//insere os dados dos itempedidos no banco de dados, não funcionou erra rotina
// app.get('/itemPedidos',async(req,res)=>{
//     await itempedido.create({
//         quantidade: 1,
//         valor: 2.13,
//         creatAt: new Date(),
//         updateAt: new Date()
//     })
//     res.send('Item Pedido criado com sucesso');
// });
