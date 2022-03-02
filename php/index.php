<?php

$Atividades = '[
  {
    "atividade": "tomar café da manhã",
    "hora": "06:30"
  },
  {
    "atividade": "correr",
    "hora": "06:45"
  },
  {
    "atividade": "tomar banho",
    "hora": "07:15"
  },
  {
    "atividade": "transito",
    "hora": "07:40"
  },
  {
    "atividade": "ler emails",
    "hora": "08:15"
  },
  {
    "atividade": "ir para casa dos avós",
    "hora": "09:00"
  },
  {
    "atividade": "almoço em família",
    "hora": "12:00"
  },
  {
    "atividade": "ver filme em casa",
    "hora": "14:00"
  },
  {
    "atividade": "tomar banho",
    "hora": "17:00"
  },
  {
    "atividade": "arrumar para aniversario",
    "hora": "17:20"
  },
  {
    "atividade": "transito",
    "hora": "17:45"
  },
  {
    "atividade": "comemoração do aniversario",
    "hora": "18:30"
  },
  {
    "atividade": "transito",
    "hora": "21:30"
  },
  {
    "atividade": "ligar video game",
    "hora": "22:00"
  },
  {
    "atividade": "descansar",
    "hora": "23:00"
  }
]';

$Atividades = json_decode($Atividades, true);

// Verificar se está sendo passado na URL a página atual. Senão é atribuido o valor 1;
$pagina = (isset($_GET['pagina'])) ? $_GET['pagina'] : 1;

//total de atividades
$total_atividade = 15;

//seta a quantidade de atividades por página;
$quantidade_p_pg = 5;

//calcula a quantidade de paginas para mostrar as atividades/horario
//$num_paginas= ceil($total_atividade/$quantidade_p_pg);

$arrAtividades;
//calcula o inicio da visualização

$inicio = ($quantidade_p_pg * $pagina) - $quantidade_p_pg;
$arr2 = [];
$arr1 = [];

if ($pagina == 1) {
  for ($i = $inicio; $i <= $inicio + 4; $i++) {
    $arr1[] = $Atividades[$i];
  }
} else {
  for ($i = $inicio; $i < $inicio + 5; $i++) {
    $arr2[] = ($Atividades[$i]);
  }
}

if ($pagina == 1) {
  echo json_encode($arr1);
} else {
  echo json_encode($arr2);
}
