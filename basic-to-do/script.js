$(document).ready(function() {
    // Initialize variables
    var todoList = [];
  
    // Load saved items from localStorage
    if (localStorage.getItem('todoList')) {
      todoList = JSON.parse(localStorage.getItem('todoList'));
      displayItems();
    }
  
    // Add item to list
    $('#addBtn').click(function() {
      var newItem = $('#newItem').val();
      if (newItem !== '') {
        todoList.push(newItem);
        saveItems();
        displayItems();
        $('#newItem').val('');
      }
    });
  
    // Remove item from list
    $('ul').on('click', 'li button', function() {
      var index = $(this).parent().index();
      todoList.splice(index, 1);
      saveItems();
      displayItems();
    });
  
    // Change item in list
    $('ul').on('click', 'li span', function() {
      var index = $(this).parent().index();
      var newItem = prompt('Enter new text for item:', todoList[index]);
      if (newItem !== null && newItem !== '') {
        todoList[index] = newItem;
        saveItems();
        displayItems();
      }
    });
  
    // Display items in list
    function displayItems() {
      $('ul').empty();
      for (var i = 0; i < todoList.length; i++) {
        var li = $('<li><span>' + todoList[i] + '</span><button>X</button></li>');
        $('ul').append(li);
      }
    }
  
    // Save items to localStorage
    function saveItems() {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  });
  