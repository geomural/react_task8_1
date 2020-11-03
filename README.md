Шарифуллина Александра

Домашнее задание 8.1

<h1>Hooks & Context API</h1>

<h2>Список и детали</h2>

Вы решили потренироваться в использовании хука useEffect и реализовать следующее приложение - список с пользователями, при это при клике на пользователя рядом появляется окно, отображающее детальную информацию о пользователе:

<img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/assets/use-effect.png" alt=""/>

При первой загрузке ни один из элементов не выбран, поэтому отображается только список:

<img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/assets/first-load.png" alt=""/>

<h2>Механика</h2>

Назовём первый компонент (который слева) - List, а второй (который справа) - Details.

Реализуйте следующую логику:
<ul>
  <li>При загрузке приложения один раз делается запрос по адресу: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json и отрисовывается список в компоненте List</li>
  <li>При клике на конкретный элемент списка в компонент Details передаются один props: info (объект с полями id и name) и начинается загрузка данных по адресу: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/{id}.json, где {id} - это id пользователя из props.</li>
  <li>На время загрузки можете отображать индикатор загрузки (протестируйте с помощью выставления ограничения пропускной способности сети в Dev Tools)</li>
</ul>

Важные момент:
<ol>
<li>Вся загрузка должна происходить через хук useEffect. Подумайте, как организовать единоразовую загрузку и загрузку при каждом изменении props.info.id</li>
<li>Обратите внимание, загрузка деталей должна происходить только при изменении props.info.id, а не при каждом рендере. Т.е. если на одного и того же пользователя кликнуть дважды, то загрузка произойдёт только в первый раз.</li>
</ol>
