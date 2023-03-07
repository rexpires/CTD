select format(sum(f.Transporte),2) as TotalFatura, c.Pais 
from faturas f
inner join clientes c on f.ClienteId = c.ClienteId
group by c.Pais




