SELECT right(concat('00000000',f.FaturaID),8) as faturaId, 
date_format(f.dataFatura,'%d-%m-%Y') as dataFatura, c.cidade, f.CidadeEnvio
FROM Faturas f 
INNER JOIN Clientes c on f.ClienteID = c.ClienteID
WHERE c.Cidade <> f.CidadeEnvio and c.Pais = 'uk';
f.CidadeEnvio AND c.Pais = 'UK';

SELECT RIGHT(CONCAT('00000000',f.FaturaID),8) AS FaturaId,
       DATE_FORMAT(f.dataFatura, '%Y-%m-%d') as dataFatura,
       c.Cidade, f.CidadeEnvio
FROM faturas f
INNER JOIN clientes c
ON f.ClienteID = c.ClienteID
WHERE c.Cidade <> f.CidadeEnvio AND c.Pais = 'UK';
