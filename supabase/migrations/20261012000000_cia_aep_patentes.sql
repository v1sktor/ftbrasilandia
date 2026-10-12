-- CIA AEP / CAEP Sudeste: patentes de Soldado PM a Coronel PM (1 = mais alto).
-- Não apaga cargos antigos (podem estar ligados a membros e permissões):
-- remova os antigos (Delegado, Investigador etc.) depois, pelo painel Admin > Patentes.

insert into public.cargos (nome, nivel_hierarquico)
select v.nome, v.nivel
from (values
  ('Coronel PM', 1),
  ('Tenente Coronel PM', 2),
  ('Major PM', 3),
  ('Capitão PM', 4),
  ('1º Tenente PM', 5),
  ('2º Tenente PM', 6),
  ('Aspirante a Oficial PM', 7),
  ('Subtenente PM', 8),
  ('1º Sargento PM', 9),
  ('2º Sargento PM', 10),
  ('3º Sargento PM', 11),
  ('Cabo PM', 12),
  ('Soldado PM', 13)
) as v(nome, nivel)
where not exists (select 1 from public.cargos c where c.nome = v.nome);

-- Todo o efetivo existente passa a pertencer à CIA AEP.
update public.hierarquia set batalhao = 'CIA AEP' where batalhao is distinct from 'CIA AEP';
