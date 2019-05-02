<template>
    <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
        <div class="menu_section">
            <h3>{{this.course}}</h3>
            <ul class="nav side-menu">
                <li><a><i class="fa fa-folder"></i>introdução<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <li><router-link :to="{ path: '/', query: { ID: '1' }}"><a>Apresentação e Objetivo</a></router-link></li>
                        <router-link :to="{ path: '/', query: { ID: '2' }}"><li><a>Introdução</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '3' }}"><li><a>História e Evolução</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '4' }}"><li><a>Componentes</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '5' }}"><li><a>Arquitetura</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '6' }}"><li><a>Opções de Instalação</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '7' }}"><li><a>Ferramentas</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '8' }}"><li><a>Conceitos de Integração de Sistemas</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 01 a 04<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '9' }}"><li><a>1. Apresentação da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '10' }}"><li><a>2. Testando o Web Service com SOAPui</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '11' }}"><li><a>3. Comunicação Abap Proxy do S/4HANA para o PI</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '12' }}"><li><a>4. System Landscape Directory</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '13' }}"><li><a>5. Desenhando a Interface - Importaçao do SWC</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '14' }}"><li><a>6. Desenhando a Interface – Namespace</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '15' }}"><li><a>7. Desenhando a Interface - Interface Síncrona ou Assíncrona</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '16' }}"><li><a>8. Desenhando a Interface – Estruturas</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '17' }}"><li><a>9. Desenhando a Interface - Service Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '18' }}"><li><a>10. Desenhando a Interface – Mapeamentos</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '19' }}"><li><a>11. Configurando a Interface - Canais de Comunicão</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '20' }}"><li><a>12. Configurando a Interface - Cenário e Integrated Configuration</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '21' }}"><li><a>13. Criando Proxy Outbound e Testando a Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '22' }}"><li><a>14. Monitoramento da Execução da Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 05 a 08<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '23' }}"><li><a>1. Apresentação da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '24' }}"><li><a>2. Comunicação RFC Sender</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '25' }}"><li><a>3. Desenho da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '26' }}"><li><a>4. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '27' }}"><li><a>5. Testando a Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 09 a 12<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '28' }}"><li><a>1. Apresentação do Exercício</a></li></router-link>F3F29:F33
                        <router-link :to="{ path: '/', query: { ID: '29' }}"><li><a>2. Desenhando a Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '30' }}"><li><a>3. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '31' }}"><li><a>4. Criando Proxy de Inbound da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '32' }}"><li><a>5. Testando a Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 13 a 16<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '33' }}"><li><a>1. Apresetação do Exercício</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '34' }}"><li><a>2. Desenho da Interface – Parte 1</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '35' }}"><li><a>3. Desenho da Interface – Parte 2</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '36' }}"><li><a>4. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '37' }}"><li><a>5. Testando a Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 17<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '38' }}"><li><a>1. Apresentação do Exercício</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '39' }}"><li><a>2. Desenhando a Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '40' }}"><li><a>3. Configurando a Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '41' }}"><li><a>4. Criando Proxy de Outbound e Testando a Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 18<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '42' }}"><li><a>1. Apresentação da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '43' }}"><li><a>2. Desenho da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '44' }}"><li><a>3. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '45' }}"><li><a>4. Criando Proxy de Inbound da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '46' }}"><li><a>5. Testando a Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 19<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '47' }}"><li><a>1. Apresentação da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '48' }}"><li><a>2. Desenho da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '49' }}"><li><a>3. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '50' }}"><li><a>4. Criando Proxy de Outbound e Testando a Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 20<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '51' }}"><li><a>1. Apresentação da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '52' }}"><li><a>2. Autenticação URL Encoded</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '53' }}"><li><a>3. Java Mapping</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '54' }}"><li><a>4. Desenho da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '55' }}"><li><a>5. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '56' }}"><li><a>6. Criando Proxy Outbound e Testando a Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 21<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '57' }}"><li><a>1. Apresentação da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '58' }}"><li><a>2. Enviando valores no Header do Adapter REST</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '59' }}"><li><a>3. Desenhando a Interface – Estruturas</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '60' }}"><li><a>4. Desenhando a Interface – Mapeamento</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '61' }}"><li><a>5. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '62' }}"><li><a>6. Criando Proxy Outbound e Testando a Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 22 a 25<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '63' }}"><li><a>1. Apresentação da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '64' }}"><li><a>2. Desenho da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '65' }}"><li><a>3. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '66' }}"><li><a>4. Criando Proxy de Inbound da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '67' }}"><li><a>5. Testando a Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 26<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '68' }}"><li><a>1. Apresentação da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '69' }}"><li><a>2. Desenho da Interface – Estruturas</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '70' }}"><li><a>3. Desenho da Interface – Mapeamentos</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '71' }}"><li><a>4. Canal JDBC Receiver e Deploy do Driver JDBC</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '72' }}"><li><a>5. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '73' }}"><li><a>6. Criando Proxy Outbound e Testando a Interface</a></li></router-link>
                    </ul>
                </li><li><a><i class="fa fa-folder"></i>exercicios - 27<span class="fa fa-chevron-down"></span></a>
                <ul class="nav child_menu">
                    <router-link :to="{ path: '/', query: { ID: '74' }}"><li><a>1. Apresentação da Interface</a></li></router-link>
                    <router-link :to="{ path: '/', query: { ID: '75' }}"><li><a>2. Desenho da Interface</a></li></router-link>
                    <router-link :to="{ path: '/', query: { ID: '76' }}"><li><a>3. Configuração da Interface</a></li></router-link>
                    <router-link :to="{ path: '/', query: { ID: '77' }}"><li><a>4. Testando a Interface</a></li></router-link>
                </ul>
            </li>
                <li>
                    <a>
                        <i class="fa fa-folder"></i>exercicios - 28<span class="fa fa-chevron-down"></span>
                    </a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '78' }}"><li><a>1. Apresentaçao da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '79' }}"><li><a>2. Criação do IDOC de Outbound</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '80' }}"><li><a>3. Desenho da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '81' }}"><li><a>4. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '82' }}"><li><a>5. Testando a Interface</a></li></router-link>
                    </ul>
                </li>
                <li><a><i class="fa fa-folder"></i>exercicios - 29<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <router-link :to="{ path: '/', query: { ID: '83' }}"><li><a>1. Apresentação da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '84' }}"><li><a>2. Criando IDOC de Inbound</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '85' }}"><li><a>3. Desenho da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '86' }}"><li><a>4. Configuração da Interface</a></li></router-link>
                        <router-link :to="{ path: '/', query: { ID: '87' }}"><li><a>5. Testando a Interface</a></li></router-link>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>
