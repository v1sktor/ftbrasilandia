export interface Unidade {
  sigla: string;
  nome: string;
  descricao: string;
}

/** Unidade atendida pelo portal. */
export const UNIDADES: Unidade[] = [
  { sigla: "CIA AEP", nome: "CIA AEP — CAEP Sudeste", descricao: "Companhia de Ações Especiais · CAEP Sudeste." },
];

export const UNIDADE_SIGLAS = UNIDADES.map((u) => u.sigla);
