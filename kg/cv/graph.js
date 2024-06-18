// create an array with nodes
var nodes = new vis.DataSet([
  {id:1, label:"计算机视觉", group:"root"},
  {id:2, label:"深度学习", group:"method"},
  {id:3, label:"人造神经网络", group:"method"},
  {id:4, label:"图像分类任务", group:"task"},
  {id:5, label:"语义分割任务", group:"task"},
  {id:6, label:"目标检测任务", group:"task"},
  {id:7, label:"实例分割任务", group:"task"},
  {id:8, label:"线性分类器", group:"method"},
  {id:9, label:"全连接神经网络", group:"method"},
  {id:10, label:"图像生成任务", group:"task"},
  {id:11, label:"卷积神经网络", group:"method"},
  {id:12, label:"生成对抗网络", group:"method"},
  {id:13, label:"变分自编码器", group:"method"},
  {id:14, label:"扩散模型", group:"method"},
  {id:15, label:"图像矢量计算", group:"app"},
  {id:16, label:"风格迁移", group:"app"},
  {id:17, label:"语义成图", group:"app"},
  {id:18, label:"路径回溯", group:"method"},
  {id:19, label:"Score function", group:"method"},
  {id:20, label:"流形假说", group:"theory"},
  {id:21, label:"布朗运动", group:"theory"},
  {id:22, label:"DALL-E", group:"app"},
  {id:23, label:"Sora", group:"app"},
  {id:24, label:"人脸识别", group:"app"},
  {id:25, label:"医疗图像识别", group:"app"},
  {id:26, label:"自动驾驶", group:"app"},
  {id:27, label:"情绪识别", group:"app"},
  {id:28, label:"城市感知", group:"app"},
  {id:29, label:"体育赛事裁决", group:"app"},
  {id:30, label:"理论计算", group:"root"},
  {id:31, label:"表象和算法", group:"root"},
  {id:32, label:"硬件的实现", group:"root"},
  {id:33, label:"动作捕捉", group:"app"},
  {id:34, label:"ViT", group:"method"},
  {id:35, label:"Transformer", group:"method"},
  {id:36, label:"自然语言处理", group:"app"},
  {id:37, label:"循环神经网络", group:"method"},
  {id:38, label:"自注意力机制", group:"method"},
  {id:39, label:"注意力机制", group:"method"},
  {id:40, label:"AlexNet", group:"structure"},
  {id:41, label:"LeNet", group:"structure"},
  {id:42, label:"ZF Net", group:"structure"},
  {id:43, label:"VGG", group:"structure"},
  {id:44, label:"GoogLeNet", group:"structure"},
  {id:45, label:"ResNet", group:"structure"},
  {id:46, label:"GPU训练方式", group:"feature"},
  {id:47, label:"Inception模块", group:"feature"},
  {id:48, label:"卷积核堆叠组", group:"feature"},
  {id:49, label:"残差连接通道", group:"feature"},
  {id:50, label:"手写邮编识别", group:"app"},
  {id:51, label:"ImageNet比赛", group:"app"},
  {id:52, label:"激活函数", group:"feature"},
  {id:53, label:"Sigmoid", group:"feature"},
  {id:54, label:"Tanh", group:"feature"},
  {id:55, label:"ReLU", group:"feature"},
  {id:56, label:"Leaky ReLU", group:"feature"},
  {id:57, label:"Softmax", group:"feature"},
  {id:58, label:"训练模型", group:"method"},
  {id:59, label:"损失函数", group:"method"},
  {id:60, label:"数据损失", group:"method"},
  {id:61, label:"正则损失", group:"method"},
  {id:62, label:"正则项", group:"method"},
  {id:63, label:"过拟合", group:"theory"},
  {id:64, label:"随机失活", group:"method"},
  {id:65, label:"设计模型", group:"method"},
  {id:66, label:"超参数", group:"feature"},
  {id:67, label:"模型参数", group:"feature"},
  {id:68, label:"权值", group:"feature"},
  {id:69, label:"偏置", group:"feature"},
  {id:70, label:"深度", group:"feature"},
  {id:71, label:"宽度", group:"feature"},
  {id:72, label:"学习率", group:"method"},
  {id:73, label:"正则项权重", group:"method"},
  {id:74, label:"卷积层", group:"feature"},
  {id:75, label:"池化层", group:"feature"},
  {id:76, label:"局部相应归一化层", group:"feature"},
  {id:77, label:"全连接层", group:"feature"},
  {id:78, label:"卷积核组", group:"feature"},
  {id:79, label:"卷积核/滤波器", group:"feature"},
  {id:80, label:"卷积/滤波", group:"method"},
  {id:81, label:"卷积步长", group:"method"},
  {id:82, label:"边缘填充", group:"method"},
  {id:83, label:"特征提取", group:"app"},
  {id:84, label:"降噪", group:"app"},
  {id:85, label:"图片增强", group:"app"},
  {id:86, label:"Sobel", group:"method"},
  {id:87, label:"Canny", group:"method"},
  {id:88, label:"Prewitt", group:"method"},
  {id:89, label:"Gaussian", group:"method"},
  {id:90, label:"Lapacian", group:"method"},
  {id:91, label:"降采样", group:"app"},
  {id:92, label:"高斯金字塔", group:"method"},
  {id:93, label:"拉普拉斯金字塔", group:"method"},
  {id:94, label:"快速傅里叶变换", group:"method"},
  {id:95, label:"小波变换", group:"method"},
  {id:96, label:"频率域操作", group:"method"},
  {id:97, label:"哈尔小波", group:"method"},
  {id:98, label:"高通滤波", group:"method"},
  {id:99, label:"低通滤波", group:"method"},
  {id:100, label:"方向位滤波", group:"method"}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from:1, to:2, label:"基于", arrowhead:"normal"},
  {from:3, to:2, label:"被用于", arrowhead:"normal"},
  {from:1, to:4, label:"包含", arrowhead:"normal"},
  {from:1, to:5, label:"包含", arrowhead:"normal"},
  {from:1, to:6, label:"包含", arrowhead:"normal"},
  {from:1, to:7, label:"包含", arrowhead:"normal"},
  {from:8, to:4, label:"被用于", arrowhead:"normal"},
  {from:9, to:4, label:"被用于", arrowhead:"normal"},
  {from:9, to:3, label:"是一种", arrowhead:"normal"},
  {from:1, to:10, label:"包含", arrowhead:"normal"},
  {from:11, to:4, label:"被用于", arrowhead:"normal"},
  {from:11, to:3, label:"是一种", arrowhead:"normal"},
  {from:3, to:5, label:"被用于", arrowhead:"normal"},
  {from:3, to:6, label:"被用于", arrowhead:"normal"},
  {from:3, to:7, label:"被用于", arrowhead:"normal"},
  {from:12, to:10, label:"被用于", arrowhead:"normal"},
  {from:13, to:10, label:"被用于", arrowhead:"normal"},
  {from:14, to:10, label:"被用于", arrowhead:"normal"},
  {from:12, to:15, label:"应用场景", arrowhead:"normal"},
  {from:12, to:16, label:"应用场景", arrowhead:"normal"},
  {from:12, to:17, label:"应用场景", arrowhead:"normal"},
  {from:14, to:18, label:"基于", arrowhead:"normal"},
  {from:14, to:19, label:"基于", arrowhead:"normal"},
  {from:14, to:20, label:"基于", arrowhead:"normal"},
  {from:14, to:21, label:"受启发", arrowhead:"normal"},
  {from:14, to:22, label:"应用场景", arrowhead:"normal"},
  {from:14, to:23, label:"应用场景", arrowhead:"normal"},
  {from:1, to:24, label:"应用场景", arrowhead:"normal"},
  {from:1, to:25, label:"应用场景", arrowhead:"normal"},
  {from:1, to:26, label:"应用场景", arrowhead:"normal"},
  {from:1, to:27, label:"应用场景", arrowhead:"normal"},
  {from:1, to:28, label:"应用场景", arrowhead:"normal"},
  {from:1, to:29, label:"应用场景", arrowhead:"normal"},
  {from:1, to:30, label:"包括层次", arrowhead:"normal"},
  {from:1, to:31, label:"包括层次", arrowhead:"normal"},
  {from:1, to:32, label:"包括层次", arrowhead:"normal"},
  {from:1, to:33, label:"应用场景", arrowhead:"normal"},
  {from:12, to:3, label:"是一种", arrowhead:"normal"},
  {from:34, to:3, label:"是一种", arrowhead:"normal"},
  {from:34, to:4, label:"被用于", arrowhead:"normal"},
  {from:34, to:35, label:"发展自", arrowhead:"normal"},
  {from:35, to:36, label:"应用场景", arrowhead:"normal"},
  {from:35, to:37, label:"发展自", arrowhead:"normal"},
  {from:37, to:36, label:"应用场景", arrowhead:"normal"},
  {from:35, to:38, label:"基于", arrowhead:"normal"},
  {from:38, to:39, label:"发展自", arrowhead:"normal"},
  {from:39, to:37, label:"发展自", arrowhead:"normal"},
  {from:40, to:11, label:"是一种", arrowhead:"normal"},
  {from:41, to:11, label:"是一种", arrowhead:"normal"},
  {from:42, to:11, label:"是一种", arrowhead:"normal"},
  {from:42, to:40, label:"发展自", arrowhead:"normal"},
  {from:40, to:41, label:"发展自", arrowhead:"normal"},
  {from:43, to:11, label:"是一种", arrowhead:"normal"},
  {from:44, to:11, label:"是一种", arrowhead:"normal"},
  {from:45, to:11, label:"是一种", arrowhead:"normal"},
  {from:40, to:46, label:"包括特点", arrowhead:"normal"},
  {from:44, to:47, label:"包括特点", arrowhead:"normal"},
  {from:43, to:48, label:"包括特点", arrowhead:"normal"},
  {from:45, to:49, label:"包括特点", arrowhead:"normal"},
  {from:41, to:50, label:"应用场景", arrowhead:"normal"},
  {from:40, to:51, label:"2012年获胜", arrowhead:"normal"},
  {from:42, to:51, label:"2013年获胜", arrowhead:"normal"},
  {from:43, to:51, label:"2014年获胜", arrowhead:"normal"},
  {from:44, to:51, label:"2014年获胜", arrowhead:"normal"},
  {from:45, to:51, label:"2015年获胜", arrowhead:"normal"},
  {from:9, to:52, label:"包含", arrowhead:"normal"},
  {from:11, to:52, label:"包含", arrowhead:"normal"},
  {from:53, to:52, label:"是一种", arrowhead:"normal"},
  {from:54, to:52, label:"是一种", arrowhead:"normal"},
  {from:55, to:52, label:"是一种", arrowhead:"normal"},
  {from:56, to:52, label:"是一种", arrowhead:"normal"},
  {from:57, to:52, label:"是一种", arrowhead:"normal"},
  {from:3, to:58, label:"需要", arrowhead:"normal"},
  {from:58, to:59, label:"包含", arrowhead:"normal"},
  {from:59, to:60, label:"包含", arrowhead:"normal"},
  {from:59, to:61, label:"包含", arrowhead:"normal"},
  {from:62, to:61, label:"计算", arrowhead:"normal"},
  {from:62, to:63, label:"抑制", arrowhead:"normal"},
  {from:64, to:63, label:"抑制", arrowhead:"normal"},
  {from:3, to:65, label:"需要", arrowhead:"normal"},
  {from:65, to:64, label:"决定", arrowhead:"normal"},
  {from:58, to:67, label:"改变", arrowhead:"normal"},
  {from:65, to:66, label:"决定", arrowhead:"normal"},
  {from:67, to:68, label:"包含", arrowhead:"normal"},
  {from:67, to:69, label:"包含", arrowhead:"normal"},
  {from:66, to:70, label:"包含", arrowhead:"normal"},
  {from:66, to:71, label:"包含", arrowhead:"normal"},
  {from:71, to:3, label:"定义", arrowhead:"normal"},
  {from:70, to:3, label:"定义", arrowhead:"normal"},
  {from:66, to:72, label:"包含", arrowhead:"normal"},
  {from:72, to:58, label:"决定", arrowhead:"normal"},
  {from:66, to:73, label:"包含", arrowhead:"normal"},
  {from:73, to:59, label:"影响", arrowhead:"normal"},
  {from:11, to:74, label:"包含", arrowhead:"normal"},
  {from:11, to:75, label:"包含", arrowhead:"normal"},
  {from:11, to:76, label:"包含", arrowhead:"normal"},
  {from:11, to:77, label:"包含", arrowhead:"normal"},
  {from:74, to:78, label:"包含", arrowhead:"normal"},
  {from:78, to:79, label:"包含", arrowhead:"normal"},
  {from:79, to:80, label:"被用于", arrowhead:"normal"},
  {from:80, to:81, label:"需考虑", arrowhead:"normal"},
  {from:80, to:82, label:"需考虑", arrowhead:"normal"},
  {from:80, to:83, label:"被用于", arrowhead:"normal"},
  {from:80, to:84, label:"被用于", arrowhead:"normal"},
  {from:80, to:85, label:"被用于", arrowhead:"normal"},
  {from:86, to:79, label:"是一种", arrowhead:"normal"},
  {from:87, to:79, label:"是一种", arrowhead:"normal"},
  {from:88, to:79, label:"是一种", arrowhead:"normal"},
  {from:89, to:79, label:"是一种", arrowhead:"normal"},
  {from:90, to:79, label:"是一种", arrowhead:"normal"},
  {from:80, to:91, label:"被用于", arrowhead:"normal"},
  {from:91, to:92, label:"组建", arrowhead:"normal"},
  {from:91, to:93, label:"组建", arrowhead:"normal"},
  {from:96, to:80, label:"被用于", arrowhead:"normal"},
  {from:96, to:94, label:"需使用", arrowhead:"normal"},
  {from:96, to:95, label:"需使用", arrowhead:"normal"},
  {from:97, to:95, label:"被用于", arrowhead:"normal"},
  {from:98, to:96, label:"是一种", arrowhead:"normal"},
  {from:99, to:96, label:"是一种", arrowhead:"normal"},
  {from:100, to:96, label:"是一种", arrowhead:"normal"}
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};

var options = {
  // edges
  edges:{
     arrows: {
       to: {
         enabled: true,
         imageHeight: undefined,
         imageWidth: undefined,
         scaleFactor: 1,
         src: undefined,
         type: "arrow"
       },
       middle: {
         enabled: false,
         imageHeight: 32,
         imageWidth: 32,
         scaleFactor: 1,
         src: undefined,
         type: "crow"
       },
       from: {
         enabled: false,
         imageHeight: undefined,
         imageWidth: undefined,
         scaleFactor: 1,
         src: undefined,
         type: "arrow"
       }
     },
     endPointOffset: {
       from: 0,
       to: 0
     },
     arrowStrikethrough: false,
     chosen: true,
     color: {
       color:'#79d1cd',
       highlight:'red',
       hover: '#57a9c2',
       inherit: 'from',
       opacity:1.0
     },
     dashes: false,
     font: {
       color: '#343434',
       size: 14, // px
       face: 'arial',
       background: 'none',
       strokeWidth: 2, // px
       strokeColor: '#ffffff',
       align: 'horizontal',
       multi: false,
       vadjust: 0,
       bold: {
         color: '#343434',
         size: 14, // px
         face: 'arial',
         vadjust: 0,
         mod: 'bold'
       },
       ital: {
         color: '#343434',
         size: 14, // px
         face: 'arial',
         vadjust: 0,
         mod: 'italic',
       },
       boldital: {
         color: '#343434',
         size: 14, // px
         face: 'arial',
         vadjust: 0,
         mod: 'bold italic'
       },
       mono: {
         color: '#343434',
         size: 15, // px
         face: 'courier new',
         vadjust: 2,
         mod: ''
       }
     },
     hidden: false,
     hoverWidth: 2,
     label: undefined,
     labelHighlightBold: true,
     length: undefined,
     physics: true,
     scaling:{
       min: 1,
       max: 15,
       label: {
         enabled: true,
         min: 14,
         max: 30,
         maxVisible: 30,
         drawThreshold: 5
       },
       customScalingFunction: function (min,max,total,value) {
         if (max === min) {
           return 0.5;
         }
         else {
           var scale = 1 / (max - min);
           return Math.max(0,(value - min)*scale);
         }
       }
     },
     selectionWidth: 2,
     selfReferenceSize: 20,
     selfReference:{
         size: 20,
         angle: Math.PI / 4,
         renderBehindTheNode: true
     },
     shadow:{
       enabled: false,
       color: 'rgba(0,0,0,0.5)',
       size:10,
       x:5,
       y:5
     },
     smooth: {
       enabled: true,
       type: "dynamic",
       roundness: 0.5
     },
     title:undefined,
     value: undefined,
     width: 2,
     widthConstraint: false
   },
// Nodes
    nodes:{
        borderWidth: 1,
        borderWidthSelected: 2,
        brokenImage:undefined,
        chosen: true,
        color: {
          border: '#57a9c2',
          background: '#84cbe0',
          highlight: {
            border: 'red',
            background: '#e83838'
          },
          hover: {
            border: '#57a9c2',
            background: '#cce2e8'
          }
        },
        opacity: 1,
        fixed: {
          x:false,
          y:false
        },
        font: {
          color: '#343434',
          size: 14, // px
          face: 'arial',
          background: 'none',
          strokeWidth: 0, // px
          strokeColor: '#ffffff',
          align: 'center',
          multi: false,
          vadjust: 0,
          bold: {
            color: '#343434',
            size: 14, // px
            face: 'arial',
            vadjust: 0,
            mod: 'bold'
          },
          ital: {
            color: '#343434',
            size: 14, // px
            face: 'arial',
            vadjust: 0,
            mod: 'italic',
          },
          boldital: {
            color: '#343434',
            size: 14, // px
            face: 'arial',
            vadjust: 0,
            mod: 'bold italic'
          },
          mono: {
            color: '#343434',
            size: 15, // px
            face: 'courier new',
            vadjust: 2,
            mod: ''
          }
        },
        group: undefined,
        heightConstraint: false,
        hidden: false,
        icon: {
          face: 'FontAwesome',
          code: undefined,
          weight: undefined,
          size: 50,  //50,
          color:'#57a9c2'
        },
        image: undefined,
        imagePadding: {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        },
        label: undefined,
        labelHighlightBold: true,
        level: undefined,
        mass: 1,
        physics: true,
        scaling: {
          min: 10,
          max: 30,
          label: {
            enabled: false,
            min: 14,
            max: 30,
            maxVisible: 30,
            drawThreshold: 5
          },
          customScalingFunction: function (min,max,total,value) {
            if (max === min) {
              return 0.5;
            }
            else {
              let scale = 1 / (max - min);
              return Math.max(0,(value - min)*scale);
            }
          }
        },
        shadow:{
          enabled: false,
          color: 'rgba(0,0,0,0.5)',
          size:10,
          x:5,
          y:5
        },
        shape: 'ellipse',
        shapeProperties: {
          borderDashes: false, // only for borders
          borderRadius: 6,     // only for box shape
          interpolation: false,  // only for image and circularImage shapes
          useImageSize: false,  // only for image and circularImage shapes
          useBorderWithImage: false,  // only for image shape
          coordinateOrigin: 'center'  // only for image and circularImage shapes
        },
        size: 25,
        title: undefined,
        value: undefined,
        widthConstraint: false,
        x: undefined,
        y: undefined
      },
// layer
layout: {
    randomSeed: undefined,
    improvedLayout:true,
    clusterThreshold: 150,
    hierarchical: {
      enabled:false,
      levelSeparation: 150,
      nodeSpacing: 100,
      treeSpacing: 200,
      blockShifting: true,
      edgeMinimization: true,
      parentCentralization: true,
      direction: 'UD',        // UD, DU, LR, RL
      sortMethod: 'hubsize',  // hubsize, directed
      shakeTowards: 'leaves'  // roots, leaves
    }
  },
// interaction
interaction:{
    dragNodes:true,
    dragView: true,
    hideEdgesOnDrag: false,
    hideEdgesOnZoom: false,
    hideNodesOnDrag: false,
    hover: true,
    hoverConnectedEdges: true,
    keyboard: {
      enabled: false,
      speed: {x: 10, y: 10, zoom: 0.02},
      bindToWindow: true,
      autoFocus: true,
    },
    multiselect: false,
    navigationButtons: false,
    selectable: true,
    selectConnectedEdges: true,
    tooltipDelay: 300,
    zoomSpeed: 1,
    zoomView: true
  },
//Physics
physics:{
    enabled: true,
    barnesHut: {
      theta: 0.5,
      gravitationalConstant: -2000,
      centralGravity: 0.3,
      springLength: 95,
      springConstant: 0.04,
      damping: 0.09,
      avoidOverlap: 0
    },
    forceAtlas2Based: {
      theta: 0.5,
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springConstant: 0.08,
      springLength: 100,
      damping: 0.4,
      avoidOverlap: 0
    },
    repulsion: {
      centralGravity: 0.2,
      springLength: 200,
      springConstant: 0.05,
      nodeDistance: 100,
      damping: 0.09
    },
    hierarchicalRepulsion: {
      centralGravity: 0.0,
      springLength: 100,
      springConstant: 0.01,
      nodeDistance: 120,
      damping: 0.09,
      avoidOverlap: 0
    },
    maxVelocity: 50,
    minVelocity: 0.1,
    solver: 'barnesHut',
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 100,
      onlyDynamicEdges: false,
      fit: true
    },
    timestep: 0.5,
    adaptiveTimestep: true,
    wind: { x: 0, y: 0 }
  },
  // group
  groups: {
      root: {color:{background:'#82d9ab',border:'#7dc9a1'}, borderWidth:3},
      theory: {color:{background:'#badbf5',border:'#a9c6de'}, borderWidth:3},
      method: {color:{background:'#b7ebb8',border:'#a3d1a4'}, borderWidth:3},
      task: {color:{background:'#e3bb7f',border:'#c9a773'}, borderWidth:3},
      feature: {color:{background:'#deebb7',border:'#d1dea9'}, borderWidth:3},
      structure: {color:{background:'#cfccbc',border:'#b5b3a5'}, borderWidth:3},
      app: {color:{background:'#f0b3af',border:'#d19c99'}, borderWidth:3}
    }
}



// initialize your network!
var network = new vis.Network(container, data, options);
