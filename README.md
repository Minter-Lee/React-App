# React-App
专门由于研究react用法和示例的项目。

## react Todo
达到目前水平中对纯react书写TODO的极限，后面还会根据对其更深入的了解，再进行改进

## react-redux-es6 Todo
进入项目组前根据es6的学习情况和对redux的初步认识进行的搭建。

## new-react Todo
根据新的学习成果，充分利用CSSModules，高阶组件，decorator，无状态组件，purerender，immutable.js等知识，重新组装无react版本的todo。目前，已经完成90%的内容，由于时间问题，修正todo的错误提示未完成，同时对于部分有状态组件的高阶组件提取未进行。待redux版本完成后，再另找时间完成todo。

## new-react-redux Todo
根据上一个TODO的研究结果，加入redux，争取有一些简单的后端请求，充分利用redux特性，从而掌握。未完成

## redux-blog redux-curd
这两个小项目是针对redux练习抄写下来的，没有全部自己写。本着主要弄清redux的目的，这里面对于CSS propType等不影响项目运行的东西一概没有添加。

项目中首次使用了route来控制跳转，这也是除了redux应用外耗费时间最多的地方，主要困难点在于指导作用的书籍比较粗糙，同时redux-router已经拆分了，对于redux-roter-dom的使用不是很清楚。此外将router信息合并入redux中共同管理也是一个难点，配置后需要保证router的history前后一致才可，然后需要在不同的地方对store绑定两次（中间件和store强化方法）。然而这些都配置好了后依旧是URL地址变化但页面不刷新。

针对于redux发现一个关键点，越写思路越清晰。其实针对redux外界的介绍太多了，在本来许多人弄不清的react的单向数据流时，他的加入让很多人更糊涂，这也是我坚持先写没有redux加入的todo的目的。redux需要正视，他不是任何项目都必须的。认识redux其实就是简单的一句话，他把零散的状态统一管理起来，使之在组件间更好的利用state。总体来说分成两部分：一进一出！进为action，这是触发状态改变的入口，出为reducer，不仅根据action传来的参数处理了逻辑，还改变了状态树对应的内容。就这么多，至于怎么触发action，状态树改变后又是如何通知react的那是react-redux做的事，先看清楚redux对于状态树的管理再去看如何跟外部交流，这样思路上才不会乱。再提及一点，redux状态树的数据结构是如何构建出来的，是reducer处理后返回的数据和combineReducer是定义的节点所共同确定的。

针对于react-redux，正如上述所说的，他提供了触发action的方法dispatch和链接react传递state的方法connect。如果react使用redux管理state，那他需要做什么，首先他需要将redux管理的状态树注入进父组件中，作为props来进行使用。同时要将定义好的action方法和触发器dispatch传入父组件的props，用于传递和改变状态使用（代替setState改变状态）。这就好理解了connect方法前两个参数的作用，第一个是传递redux维护的state给父组件当props使用（MapStateToProps）,第二个是将action也传入父组件的props中，同时可以用bindActionCreators，将dispatch于action绑定，这样就可以直接调用你定义个action就可以使用，不需要层层传递dipatch，然后执行dispatch(action)。

知道了以上这些，就理顺了思路，学习redux和react过程中，有一个非常必备的知识，柯里化。高阶函数，高阶组件，高阶reducer甚至是connect方法，中间件的applyMiddleware方法，全是他的影子，只有理解他的本质，才能明白为什么传入函数能做那么多事儿而没有影响最后结果的执行。

