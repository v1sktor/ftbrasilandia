export interface UnidadeInstitucional {
  sigla: string;
  nome: string;
  subtitulo: string;
  missao: string;
  historia: string;
  contato: string;
}

export const INSTITUCIONAL: UnidadeInstitucional[] = [
  {
    sigla: "CAEP",
    nome: "CAEP Sudeste",
    subtitulo: "Ações Especiais · Cidade de Salve",
    missao:
      "Atuar em ocorrências de alta complexidade e risco, com técnica, disciplina e prontidão, preservando a ordem pública e a integridade da população da cidade de Salve.",
    historia:
      "O CAEP Sudeste é a unidade de Ações Especiais da cidade de Salve, voltada ao emprego tático em situações críticas, operações planejadas e apoio às demais forças de segurança. Seu lema, Fidelis Militia, expressa a lealdade e o compromisso de seus integrantes com a corporação e com a sociedade.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do CAEP Sudeste.",
  },
  {
    sigla: "AE",
    nome: "Ações Especiais",
    subtitulo: "Emprego tático · CAEP Sudeste",
    missao:
      "Executar operações táticas, resgates e intervenções que exijam treinamento especializado, planejamento operacional e elevado nível de preparo.",
    historia:
      "As Ações Especiais reúnem os integrantes do CAEP Sudeste treinados para operar em cenários de elevado risco, em apoio às unidades da cidade de Salve e sob coordenação do comando operacional.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do CAEP Sudeste.",
  },
];
