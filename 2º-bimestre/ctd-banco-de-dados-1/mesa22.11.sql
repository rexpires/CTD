select c.Empresa, count(f.FaturaId), sum(f.Transporte)
from Faturas f
inner join correios c on c.CorreioID = f.FormaEnvio
group by c.Empresa;

SELECT concat('Sr/a ', Contato) as Nome, concat('n', Titulo) as Titulo, concat('rua', Endereco) as Endereco, concat('-', Cidade) as Cidade
from clientes
order by nome asc;

SELECT c.CategoriaNome, c.Descricao, COUNT(p.ProdutoID)
FROM produtos p
INNER JOIN categorias c
ON p.CategoriaID = c.CategoriaID
GROUP BY c.CategoriaNome;

