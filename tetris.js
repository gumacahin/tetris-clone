$(document).ready(function(){
  function Tetro(n) {
    this.prev_pos = undefined;

    switch (n) {
    case 0: // O
      this.curr_pos = {
        'b1':{'x':4,'y':-2}, 'b2':{'x':5, 'y':-2},
        'b3':{'x':4,'y':-1},  'b4':{'x':5, 'y':-1}
      };

      this.color = 'O';

      this.rotate = function() {
        // pass
      }
    break;
    case 1: // I
      this.orient = 0;
      this.curr_pos = {
        'b1':{'x':3,'y':-1}, 'b2':{'x':4,'y':-1}, 'b3':{'x':5,'y':-1}, 'b4':{'x':6,'y':-1}
      };

      this.color = 'I';

      this.rotate = function() {
        var tmp = $.extend(true, {}, this.curr_pos);

        b = this;
        if (this.orient == 0) {
          tmp = {'b1':{'x':b.curr_pos.b2.x, 'y':b.curr_pos.b2.y - 1},
                'b2':{'x':b.curr_pos.b2.x, 'y':b.curr_pos.b2.y    }, // pivot
                'b3':{'x':b.curr_pos.b2.x, 'y':b.curr_pos.b2.y + 1},
                'b4':{'x':b.curr_pos.b2.x, 'y':b.curr_pos.b2.y + 2}
          };
          this.orient = 1;
        } else {
          tmp = {'b1':{'x':b.curr_pos.b2.x - 1, 'y':b.curr_pos.b2.y},
                'b2':{'x':b.curr_pos.b2.x    , 'y':b.curr_pos.b2.y}, // pivot
                'b3':{'x':b.curr_pos.b2.x + 1, 'y':b.curr_pos.b2.y},
                'b4':{'x':b.curr_pos.b2.x + 2, 'y':b.curr_pos.b2.y}
          };
          this.orient = 0;
        }
        if (this.can_rot(tmp)) {
          this.prev_pos = $.extend(true, {}, this.curr_pos);
          this.curr_pos = $.extend(true, {}, tmp);
          this.clear();
          this.draw();
        }
      } // end rotate;
        
    break;

    case 2: // J
      this.orient = 0;
      this.color = 'J';
      this.curr_pos = {
        'b1':{'x':4,'y':-2},
        'b2':{'x':4,'y':-1}, 'b3':{'x':5,'y':-1}, 'b4':{'x':6,'y':-1}
      };

      this.rotate = function() {
        var tmp = $.extend(true, {}, this.curr_pos);
        b = this;
        if (this.orient == 0) {
          tmp = {'b1':{'x':b.curr_pos.b2.x + 1, 'y':b.curr_pos.b2.y    },
                'b2':{'x':b.curr_pos.b2.x, 'y':b.curr_pos.b2.y    }, // pivot
                'b3':{'x':b.curr_pos.b2.x, 'y':b.curr_pos.b2.y + 1},
                'b4':{'x':b.curr_pos.b2.x, 'y':b.curr_pos.b2.y + 2}
          };
        } else if (this.orient == 1) {
          tmp = {'b1':{'x':b.curr_pos.b2.x    , 'y':b.curr_pos.b2.y + 1},
                'b2':{'x':b.curr_pos.b2.x    , 'y':b.curr_pos.b2.y}, // pivot
                'b3':{'x':b.curr_pos.b2.x - 1, 'y':b.curr_pos.b2.y},
                'b4':{'x':b.curr_pos.b2.x - 2, 'y':b.curr_pos.b2.y}
          };
        } else if (this.orient == 2) {
          tmp = {'b1':{'x':b.curr_pos.b2.x - 1, 'y':b.curr_pos.b2.y},
                'b2':{'x':b.curr_pos.b2.x    , 'y':b.curr_pos.b2.y}, // pivot
                'b3':{'x':b.curr_pos.b2.x    , 'y':b.curr_pos.b2.y - 1},
                'b4':{'x':b.curr_pos.b2.x    , 'y':b.curr_pos.b2.y - 2}
          };
        } else if (this.orient == 3) {
          tmp = {'b1':{'x':b.curr_pos.b2.x, 'y':b.curr_pos.b2.y - 1},
                'b2':{'x':b.curr_pos.b2.x    , 'y':b.curr_pos.b2.y}, // pivot
                'b3':{'x':b.curr_pos.b2.x + 1   , 'y':b.curr_pos.b2.y},
                'b4':{'x':b.curr_pos.b2.x + 2   , 'y':b.curr_pos.b2.y}
          };
        }
        if (this.can_rot(tmp)) {
          this.prev_pos = $.extend(true, {}, this.curr_pos);
          this.curr_pos = $.extend(true, {}, tmp);
          this.clear();
          this.draw();
          this.orient = (this.orient == 3? 0: this.orient + 1)
        } else {
        }
      } // end rotate;
    break;

    case 3: // L
      this.orient = 0;
      this.color = 'L';
      this.curr_pos = {
                                                  'b1':{'x':6,'y':-2},
        'b2':{'x':4,'y':-1}, 'b3':{'x':5,'y':-1}, 'b4':{'x':6,'y':-1}
      };

      this.rotate = function() {
        var tmp = $.extend(true, {}, this.curr_pos);
        b = this;
        if (this.orient == 0) { // 0 to 1
          tmp = {'b1':{'x':b.curr_pos.b4.x + 1, 'y':b.curr_pos.b4.y    },
                'b2':{'x':b.curr_pos.b4.x, 'y':b.curr_pos.b4.y - 2},
                'b3':{'x':b.curr_pos.b4.x, 'y':b.curr_pos.b4.y - 1},
                'b4':{'x':b.curr_pos.b4.x, 'y':b.curr_pos.b4.y} // pivot
          };
        } else if (this.orient == 1) { // 1 to 2
          tmp = {'b1':{'x':b.curr_pos.b4.x   ,  'y':b.curr_pos.b4.y + 1},
                'b2':{'x':b.curr_pos.b4.x + 2  , 'y':b.curr_pos.b4.y},
                'b3':{'x':b.curr_pos.b4.x + 1, 'y':b.curr_pos.b4.y},
                'b4':{'x':b.curr_pos.b4.x, 'y':b.curr_pos.b4.y} // pivot
          };
        } else if (this.orient == 2) { // 2 to 3
          tmp = {'b1':{'x':b.curr_pos.b4.x - 1,     'y':b.curr_pos.b4.y},
                'b2':{'x':b.curr_pos.b4.x    , 'y':b.curr_pos.b4.y + 2},
                'b3':{'x':b.curr_pos.b4.x    , 'y':b.curr_pos.b4.y + 1},
                'b4':{'x':b.curr_pos.b4.x    , 'y':b.curr_pos.b4.y} // pivot
          };
        } else if (this.orient == 3) { 3 - 0
          tmp = {'b1':{'x':b.curr_pos.b4.x, 'y':b.curr_pos.b4.y - 1},
                'b2':{'x':b.curr_pos.b4.x - 2, 'y':b.curr_pos.b4.y},
                'b3':{'x':b.curr_pos.b4.x - 1   , 'y':b.curr_pos.b4.y},
                'b4':{'x':b.curr_pos.b4.x    , 'y':b.curr_pos.b4.y}  // pivot
          };
        }
        if (this.can_rot(tmp)) {
          this.prev_pos = $.extend(true, {}, this.curr_pos);
          this.curr_pos = $.extend(true, {}, tmp);
          this.clear();
          this.draw();
          this.orient = (this.orient == 3? 0: this.orient + 1);
        }
      } // end rotate;
    break;

    case 4: // S
      this.orient = 0
      this.color = 'S';
      this.curr_pos = {
                            'b1':{'x':5,'y':-2}, 'b2':{'x':6,'y':-2},
        'b3':{'x':4,'y':-1}, 'b4':{'x':5,'y':-1}
      };

      this.rotate = function() {
        b = this;
        var tmp = $.extend(true, {}, this.curr_pos);
        if (this.orient == 0) {
          tmp = {'b1':{'x':b.curr_pos.b1.x, 'y':b.curr_pos.b1.y}, //pivot
                  'b2':{'x':b.curr_pos.b1.x    , 'y':b.curr_pos.b1.y + 1},
                  'b3':{'x':b.curr_pos.b1.x - 1   , 'y':b.curr_pos.b1.y},
                  'b4':{'x':b.curr_pos.b1.x - 1   , 'y':b.curr_pos.b1.y - 1}
          };
        } else if (this.orient == 1){
          tmp = {'b1':{'x':b.curr_pos.b1.x, 'y':b.curr_pos.b1.y}, //pivot
                  'b2':{'x':b.curr_pos.b1.x + 1   , 'y':b.curr_pos.b1.y},
                  'b3':{'x':b.curr_pos.b1.x  , 'y':b.curr_pos.b1.y + 1},
                  'b4':{'x':b.curr_pos.b1.x - 1   , 'y':b.curr_pos.b1.y + 1}
          };
        }
        if (this.can_rot(tmp)) {
          this.prev_pos = $.extend(true, {}, this.curr_pos);
          this.curr_pos = $.extend(true, {}, tmp);
          this.clear();
          this.draw();
          this.orient = (this.orient == 0? 1: 0)
        }
      } // end rotate;
    break;

    case 5: // Z
      this.orient = 0;
      this.color = 'Z';
      this.curr_pos = {
          'b1':{'x':4,'y':-2}, 'b2':{'x':5,'y':-2},
                              'b3':{'x':5,'y':-1}, 'b4':{'x':6,'y':-1}
      };

      this.rotate = function() {
        b = this;
        var tmp = $.extend(true, {}, this.curr_pos);
        if (this.orient == 0) {
          tmp = {'b1':{'x':b.curr_pos.b2.x, 'y':b.curr_pos.b2.y + 1},
                  'b2':{'x':b.curr_pos.b2.x    , 'y':b.curr_pos.b2.y}, //pivot
                  'b3':{'x':b.curr_pos.b2.x + 1   , 'y':b.curr_pos.b2.y},
                  'b4':{'x':b.curr_pos.b2.x + 1   , 'y':b.curr_pos.b2.y - 1}
          };
        } else if (this.orient == 1){
          tmp = {'b1':{'x':b.curr_pos.b2.x - 1, 'y':b.curr_pos.b2.y}, //pivot
                  'b2':{'x':b.curr_pos.b2.x   , 'y':b.curr_pos.b2.y},
                  'b3':{'x':b.curr_pos.b2.x  , 'y':b.curr_pos.b2.y + 1},
                  'b4':{'x':b.curr_pos.b2.x + 1   , 'y':b.curr_pos.b2.y + 1}
          };
        }
        if (this.can_rot(tmp)) {
          this.prev_pos = $.extend(true, {}, this.curr_pos);
          this.curr_pos = $.extend(true, {}, tmp);
          this.clear();
          this.draw();
          this.orient = (this.orient == 0? 1: 0)
        }
      } // end rotate;
    break;

    case 6: // T
      this.orient = 0;
      this.color = 'T';
      this.curr_pos = {
                              'b1':{'x':5,'y':-2},
          'b2':{'x':4,'y':-1}, 'b3':{'x':5,'y':-1}, 'b4':{'x':6,'y':-1}
      };

      this.rotate = function() {
        var tmp = $.extend(true, {}, this.curr_pos);
        b = this;
        if (this.orient == 0) {
          tmp = {'b1':{'x':b.curr_pos.b3.x + 1, 'y':b.curr_pos.b3.y    },
                'b2':{'x':b.curr_pos.b3.x, 'y':b.curr_pos.b3.y - 1   },
                'b3':{'x':b.curr_pos.b3.x, 'y':b.curr_pos.b3.y}, // pivot
                'b4':{'x':b.curr_pos.b3.x, 'y':b.curr_pos.b3.y + 1}
          };
        } else if (this.orient == 1) {
          tmp = {'b1':{'x':b.curr_pos.b3.x  , 'y':b.curr_pos.b3.y + 1},
                'b2':{'x':b.curr_pos.b3.x + 1   , 'y':b.curr_pos.b3.y},
                'b3':{'x':b.curr_pos.b3.x, 'y':b.curr_pos.b3.y}, // pivot
                'b4':{'x':b.curr_pos.b3.x - 1, 'y':b.curr_pos.b3.y}
          };
        } else if (this.orient == 2) {
          tmp = {'b1':{'x':b.curr_pos.b3.x, 'y':b.curr_pos.b3.y - 1},
                'b2':{'x':b.curr_pos.b3.x - 1   , 'y':b.curr_pos.b3.y},
                'b3':{'x':b.curr_pos.b3.x , 'y':b.curr_pos.b3.y}, // pivot
                'b4':{'x':b.curr_pos.b3.x    , 'y':b.curr_pos.b3.y + 1}
          };
        } else if (this.orient == 3) {
          tmp = {'b1':{'x':b.curr_pos.b3.x , 'y':b.curr_pos.b3.y -1},
                'b2':{'x':b.curr_pos.b3.x  - 1  , 'y':b.curr_pos.b3.y},
                'b3':{'x':b.curr_pos.b3.x   , 'y':b.curr_pos.b3.y}, // pivot
                'b4':{'x':b.curr_pos.b3.x + 1 , 'y':b.curr_pos.b3.y}
          };
        }
        if (this.can_rot(tmp)) {
          this.prev_pos = $.extend(true, {}, this.curr_pos);
          this.curr_pos = $.extend(true, {}, tmp);
          this.clear();
          this.draw();
          this.orient = (this.orient == 3? 0: this.orient + 1)
        }
      } // end rotate;
    break;
    } // end switch

    this.move = function(dir) {

      // check if we can move there
      var tmp = $.extend(true, {}, this.curr_pos);

      switch (dir) {

      case 'd':
        for (b in tmp) {
          ++tmp[b].y
        }
      break;

      case 'u':
        for (b in tmp) {
          --tmp[b].y
        }
      break;

      case 'l':
        for (b in tmp) {
          --tmp[b].x
        }
      break;

      case 'r':
        for (b in tmp) {
          ++tmp[b].x
        }
      break;
      }

      can_move = true
      for (b in tmp) {
        // are we out of bounds?
        if (tmp[b].x > 9 || tmp[b].x < 0 || tmp[b].y > 19) {
          can_move = false;
        }

        try {
          if (tmp[b].y > 0 && typeof $('td.main_block.X'+tmp[b].x+'.Y'+tmp[b].y) != 'undefined' && $('td.main_block.X'+tmp[b].x+'.Y'+tmp[b].y).attr('class').indexOf('occupied') != -1) {
            can_move = false;
          }
        } catch(e) {
          can_move = false;
        }
      }

      if (can_move) {
        this.prev_pos = $.extend(true, {}, this.curr_pos);
        this.curr_pos = $.extend(true, {}, tmp);

        this.clear();
        this.draw();
      }

      if (!can_move && dir == 'd') {
        Tetris.statGame();
      } 
    }; // end move

    this.can_rot = function(tmp){
      can_rot = true
      for (b in tmp) {
        // are we out of bounds?
        if (tmp[b].x > 9 || tmp[b].x < 0 || tmp[b].y > 19) {
          can_rot = false;
        }

        try {
          if (tmp[b].y > 0 && typeof $('td.main_block.X'+tmp[b].x+'.Y'+tmp[b].y) != 'undefined' && $('td.main_block.X'+tmp[b].x+'.Y'+tmp[b].y).hasClass('occupied')) {
            can_rot = false;
          }
        } catch(e) {
          can_rot = false;
        }
      }
      return can_rot;
    };

    this.draw = function() {
      for (b in this.curr_pos) {
        $('td.main_block.X'+this.curr_pos[b].x+'.Y'+this.curr_pos[b].y).addClass(this.color);
      }
    };

    this.clear = function() {
      if (typeof this.prev_pos != 'undefined') {
        for (b in this.prev_pos) {
          $(s = 'td.main_block.X'+this.prev_pos[b].x+'.Y'+this.prev_pos[b].y).removeClass(this.color);;
        }
      }
    };
  } // end tetro

  Tetris = {
        
    'statGame': function(){
      // make the current tetromino solid
      for (b in this.curr_tetro.curr_pos) {
        $('.main_block.Y'+this.curr_tetro.curr_pos[b].y+'.X'+this.curr_tetro.curr_pos[b].x).addClass('occupied');
      }

      //check for clears
      var toClear = [];
      for (i = 0; i < 20; i++) {
        var c = 0;
        if ($('.main_block.Y'+i+'.occupied').length == 10) {
          toClear.push(i);
        }
      }

      // 
      
      this.clearLines(toClear);

      // check for game over
      if ($('.Y0.occupied').length > 0) {
        this.stop();
        Tetris.setStat('Game over');
        return;
      }
      this.getTetros();
    }, // end StatGame()
    
    'clearLines':function(lines){

      $.each(lines, function(){ // CODE HERE!!!!!!
        // clear
        $('td.main_block.Y'+this).removeClass('occupied I O J L T Z S');
        // move everything down by 1 by...
        var toMoveDown = []
        for (var i = this - 1; i > -1; i--) {
          for (var j = 0; j < 11; j++) {
            if ($('.main_block.Y'+i+'.X'+j).hasClass('occupied')) {
              toMoveDown.push({'x':j,'y':i, 'color': $('.main_block.Y'+i+'.X'+j).css('background-color')[4]});
            }
          }
        }
        // clear everything above the line just cleared...
        for (var i = 0; i < 11; i++)
          for (var j = this - 1; j > -1; j--) {
            $('.main_block.Y'+j+'.X'+i).removeClass('occupied I O J L T Z S');
        }
        // and redrawing them one line lower
        var c = ['O', 'I', 'J', 'L', 'S', 'Z', 'T'];
        $.each(toMoveDown, function(){
          $('.main_block.Y'+(this.y+1)+'.X'+this.x).addClass(c[this.color]);
          $('.main_block.Y'+(this.y+1)+'.X'+this.x).addClass('occupied');
        });
      });
      // update the score
      var gainedScr = (lines.length * lines.length * this.level)
      this.score += gainedScr;
      this.clearCount += lines.length;
      $('.score').text(this.score);

      // update level
      if (this.clearCount >= this.clearGoal) {
        this.level++;
        $('.level').text(this.level);
        this.clearGoal += this.clearGoal;
        // crank the speed
        this.gravity -= this.gravity * 0.10;
        clearInterval(this.timeout);
        this.timeout = setInterval('Tetris.drop()', parseInt(this.gravity));
        this.clearCount = 0;
      }

    }, // end clear lines

    'display_init':function() {
      $('#grid_wrapper').append('<table id="grid"></table>');
      var x, y;
      for (y = 0; y < 20; y++) {
        $('#grid').append('<tr class="main_row Y' + y +'"></tr>');
        for (x = 0; x < 10; x++) {
          $('tr.main_row.Y'+ y).append('<td class="main_block Y' + y + ' X' + x + '"> </td>');
        }
      }

      $('#nextbox').append('<table id="next"></table>');

      for (y = 0; y < 4; y++) {
        $('#next').append('<tr class="next_row Y' + y +'"></tr>');
        for (x = 0; x < 4; x++) {
          $('tr.next_row.Y'+ y).append('<td class="next_block Y' + y + ' X' + x + '"> </td>');
        }
      }

    }, // end display_init:function

    /**
    * Sets the initial game status
    */
    'game_init':function(){
      this.level = 1;
      this.score = 0;
      this.gravity = 1000;
      this.clearGoal = 20;
      this.clearCount = 0;
      this.getTetros();
      if (typeof this.timeout != 'undefined') clearInterval(this.timeout);
    }, // end game_init:function>

    'start':function(){
      // 
      this.disEdit();
      // enable keys 
      this.enkey();
      this.setStat('Game in progress');
      
      // start dropping tetro's
      this.timeout = setInterval('Tetris.drop()', this.gravity);
    },

    'drop':function() {
      this.curr_tetro.move('d');
    },

    'drawPreview':function() {
      var tmp = $.extend(true, {}, this.next_tetro.curr_pos);
      // clear the next box
      $('#next td').removeClass('I J L S Z O T');
      
      for (p in tmp) {
        tmp[p].y += 3;
        tmp[p].x -= 3;
      }
      for (p in tmp) {
        $('td.next_block.X'+tmp[p].x+'.Y'+tmp[p].y).addClass(this.next_tetro.color);
      }
    }, // end drawPreview

    'getTetros':function(){
     
      if (typeof this.next_tetro == 'undefined') {
        this.curr_tetro = new Tetro(Math.floor(Math.random() * 7));
        this.next_tetro = new Tetro(Math.floor(Math.random() * 7));
      } else {
        this.curr_tetro = $.extend(true, {}, this.next_tetro);
        this.next_tetro = new Tetro(Math.floor(Math.random() * 7));
        //this.next_tetro = new Tetro(1);
      }
      this.drawPreview();

    },

    'enkey':function(){
      $(document).bind('keydown', function(e){
        switch (e.keyCode) {
        case 38: // UP (rotate)
          action = function() {Tetris.curr_tetro.rotate()};
        break;

        case 40: // DOWN
          action = function() {Tetris.curr_tetro.move('d')};
        break;

        case 37: // LEFT
          action = function() {Tetris.curr_tetro.move('l')};
        break;

        case 39: // RIGHT
          action = function() {Tetris.curr_tetro.move('r')};
        break;

        default: return true;
        } // end switch
        k = e.keyCode
        if (k == 39 || k == 37) {
          if (typeof Tetris.enkey.t == 'undefined') {
            Tetris.enkey.t = setInterval('action()', 50);
            $(document).bind('keyup', function() {
              clearInterval(Tetris.enkey.t);
              Tetris.enkey.t = undefined;
            });
          }
        } else if (k == 40) {
          if (typeof Tetris.enkey.t == 'undefined') {
            Tetris.enkey.t = setInterval('action()', 30);
            $(document).bind('keyup', function() {
              clearInterval(Tetris.enkey.t);
              Tetris.enkey.t = undefined;
            });
          }
        } else if (k == 38){
          action();
        } 
        return false;
      });
    },

    'diskey':function(){
      $(document).unbind('keydown');
    },

    'stop':function(){
      clearInterval(this.timeout);
      this.enEdit();
      this.diskey();
    },
    'enEdit':function(){

      $('td.main_block').click(function(){
        // if occupied then clear
        if ($(this).hasClass('occupied')) {
          $(this).removeClass('occupied');
          $(this).css('background-color', 'white');
        } else {
          $(this).addClass('occupied');
          $(this).css('background-color', 'black');
        }
      });
    },
    'disEdit':function(){ $('tr.main_row td').unbind('click'); },
    'setStat':function(s){
      $('.status').text(s);
      $('title').text('jQuery Tetris :: ' + s);
    }

  }; // end Tetris

  $('.pause_resume').click(function(){
    if ($(this).val() == 'Pause') {
      Tetris.stop();
      $('td').attr('style','background: url(images/blocks.png) no-repeat -72px -24px;');
      Tetris.setStat('Game paused');
      $(this).val('Resume');
      $(this).attr('id', 'resume');
    } else {
      Tetris.start();
      $(this).val('Pause');
      $(this).removeClass('resume');
      $('td').removeAttr('style');
      Tetris.setStat('Game in progress');
    }
  });

  $('input[value="Reset"]').click(function(){
    $('table').remove();
    Tetris.display_init();
    Tetris.diskey();
    Tetris.game_init();
    Tetris.start();
  });

  // Play!!
  Tetris.display_init();
  Tetris.game_init();
  Tetris.start();

}); // end ready
