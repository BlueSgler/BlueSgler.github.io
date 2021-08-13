function botui_init() {
  var botui = new BotUI("hello-akilar");
  botui.message.add({
    delay: 800,
    content: "Hi, 欢迎光临blerの蓝离散星😊"
  }).then(function() {
    botui.message.add({
      delay: 1100,
      content: "我是站长Lriver😄"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "你也可以叫小河~😋"
      }).then(function() {
        botui.action.button({
          delay: 1600,
          action: [{
            text: "我想知道更多关于蓝离散星的故事!😃",
            value: "sure"
          }, {
            text: "好的，就这样吧，拜拜！🙄",
            value: "skip"
          }]
        }).then(function(a) {
          "sure" == a.value && sure();
          "skip" == a.value && end()
        })
      })
    })
  });
  var sure = function() {
      botui.message.add({
        delay: 600,
        content: "🎉🎉🎉🎉🎉🎉"
      }).then(function() {
        secondpart()
      })
    },
    end = function() {
      botui.message.add({
        delay: 600,
        content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
      })
    },
    secondpart = function() {
      botui.message.add({
        delay: 5000,
        content: "首先呢，很感谢您肯在这里驻足片刻❤️。蓝离散星是一个个人性质的博客，我会在这里发表各种各样的内容。"
      }).then(function() {
        botui.message.add({
          delay: 15000,
          content: "世间万物，我唯爱宇宙，想找到一个没有人的星球，看日出日落，赏万世孤独。蓝离散星，离散嘛，肯定没人啦，实际上真有这种星星哦，不过不能住人就是了。"
        }).then(function() {
          botui.message.add({
            delay: 5000,
            content: "分类有点单调哈，以后会改👀"
          }).then(function() {
            botui.message.add({
              delay: 8000,
              content: "大多都是一些学习笔记，以后可能会发布一些天文科普文章，这具体看我有没有时间啦！🎉"
            }).then(function() {
              botui.message.add({
                delay: 5000,
                content: "关于日记，也挺想在上面发布的，不过我觉得可能会很羞耻。😶"
              }).then(function() {
                botui.message.add({
                  delay: 4000,
                  content: "如果有灵感，也有发布一些短篇小说，不过大家看看就好了，也欢迎批评指正哦👻"
                }).then(function() {
                  botui.action.button({
                    delay: 1100,
                    action: [{
                      text: "为什么叫blerの蓝离散星呢？🤔",
                      value: "why-mashiro"
                    }]
                  }).then(function(a) {
                    thirdpart()
                  })
                })
              })
            })
          })
        })
      })
    },
    thirdpart = function() {
      botui.message.add({
        delay: 1e3,
        content: "诶？bler是bluestrggler的缩写，就是蓝离散星的意思啊😏，蓝离散星，emm🤔，这或许是我梦中心灵的归属地吧。"
      }).then(function() {
        botui.action.button({
          delay: 1500,
          action: [{
            text: "😲，那为什么要缩写呢？",
            value: "why-cat"
          }]
        }).then(function(a) {
          fourthpart()
        })
      })
    },
    fourthpart = function() {
      botui.message.add({
        delay: 3000,
        content: "因为太长了，不方便记忆啊 "
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "现在很简洁，也有它的含义~"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "方便透露一下真名吗？👀",
              value: "why-domain"
            }]
          }).then(function(a) {
            fifthpart()
          })
        })
      })
    },
    fifthpart = function() {
      botui.message.add({
        delay: 5000,
        content: "emmmm,寄蜉蝣于天地，渺沧海之一粟~"
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "不过是宇宙的一颗尘埃罢了^_^"
        })
      })
    }
}
