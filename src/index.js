

var app = new function() {

  this.element = document.getElementById('countries');

  this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Banladesh'];

  this.Count = function(data) {
    var element   = document.getElementById('counter');
    var name = 'country';

    if (data) {
      if (data > 1) {
        name = 'countries';
      }
      element.innerHTML = data + ' ' + name ;
    } else {
      element.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';

    if (this.countries.length > 0) {
      for (let i = 0; i < this.countries.length; i++) {
        data += '<tr>';
        data += '<td>' + this.countries[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.countries.length);
    return this.element.innerHTML = data;
  };

  this.Add = function () {
    element = document.getElementById('add-name');
    
    var country = element.value;

    if (country) {      
      this.countries.push(country.trim());      
      element.value = '';      
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var element = document.getElementById('edit-name');    
    element.value = this.countries[item];    
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {      
      var country = element.value;

      if (country) {        
        self.countries.splice(item, 1, country.trim());        
        self.FetchAll();        
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {    
    this.countries.splice(item, 1);    
    this.FetchAll();
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
