create view dadosCliente as
select ClienteID, Contato, Telefone, Fax from clientes;

select * from dadosCliente;

select Contato, Telefone, Fax
from dadosCliente
where fax = '';

select c.categorianome, p.ProdutoNome, coalesce(p.ProdutoNome, 'Não tem produto')
from categorias c
left join produtos p
on c.CategoriaID = p.categoriaID;

select Contato, Telefone, Fax
from clientes
where fax like '';

create view vw_Fornecedores as
select ProvedorID, Contato, Empresa, concat(Endereco, '-', Cidade, '(', CodigoPostal,')', Pais) as Endereço
from provedores;

select ProvedorID, Contato, Empresa, Endereco, Pais
from provedores
where Endereco like '%Americanas%' and Pais = 'Brazil';

select ProvedorID, Contato, Empresa, Endereço
from vw_Fornecedores
where Endereço like '%Americanas%';

create view vw_controleEstoque as 
select ProdutoID, ProdutoNome, round(PrecoUnitario), UnidadesEstoque, UnidadesPedidas,
case when UnidadesPedidas = 0 then 'BAIXA'
when UnidadesPedidas < UnidadesEstoque then 'URGENTE'
else 'PRIORITÁRIO'
end as Prioridade
from Produtos;

select * from vw_controleEstoque;


