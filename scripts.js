$(document).ready(function() {
  $("#taskForm").submit(function(event) {
      event.preventDefault();

      // Obtém os valores dos campos do formulário
      var taskName = $("#taskName").val();
      var startDate = $("#startDate").val();
      var endDate = $("#endDate").val();
      var taskDifficulty = $("#taskDifficulty").val();

      // Define a classe de acordo com a dificuldade
      var difficultyClass = '';
      if (taskDifficulty === 'facil') {
          difficultyClass = 'facil';
      } else if (taskDifficulty === 'medio') {
          difficultyClass = 'medio';
      } else if (taskDifficulty === 'dificil') {
          difficultyClass = 'dificil';
      }

      // Cria um novo item de lista com os valores obtidos
      var newTask = $('<li class="' + difficultyClass + '"></li>').text('Tarefa: ' + taskName + ' | Início: ' + startDate + ' | Fim: ' + endDate);
      var deleteBtn = $('<span class="delete-btn">❌</span>');

      // Adiciona a funcionalidade de riscar o texto ao clicar na tarefa
      newTask.click(function() {
          $(this).css("text-decoration", "line-through");
      });

      // Adiciona a funcionalidade de deletar a tarefa
      deleteBtn.click(function() {
          $(this).parent().remove();
      });

      newTask.append(deleteBtn);
      $("#taskList").append(newTask);

      // Limpa os campos do formulário
      $("#taskForm")[0].reset();
  });
});
