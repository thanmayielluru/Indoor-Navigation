//helper class for PriorityQueue
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}


// .......................................PriorityQueue......................................................
class PriorityQueue {
  constructor() {
    this.values = [];
  }


  //..............Adding elements..............
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }


  //.............Converting into a min heap.........
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }


  //............Removing the elements from pq...........
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }


  // ........Converting into min heap again.............
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break; 
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}






//............................................Dijkstra's algorithm..........................................  

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //Building up the path
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let dist_n = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (dist_n < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = dist_n;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, dist_n);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}



//.....................................Hardcoding the Graph..................................................

var graph = new WeightedGraph();

//..............Adding vertices..........
graph.addVertex("c1");
graph.addVertex("c2");
graph.addVertex("c3");
graph.addVertex("c4");
graph.addVertex("c5");
graph.addVertex("c6");
graph.addVertex("c7");
graph.addVertex("c8");
graph.addVertex("c9");
graph.addVertex("c10");
graph.addVertex("c11");
graph.addVertex("c12");
graph.addVertex("c13");
graph.addVertex("c14");
graph.addVertex("c15");
graph.addVertex("c16");
graph.addVertex("c17");
graph.addVertex("c18");
graph.addVertex("c19");
graph.addVertex("c20");
graph.addVertex("c21");
graph.addVertex("c22");
graph.addVertex("c23");
graph.addVertex("c24");
graph.addVertex("c25");
graph.addVertex("c26");
graph.addVertex("c27");
graph.addVertex("c28");
graph.addVertex("c29");
graph.addVertex("c30");
graph.addVertex("c31");
graph.addVertex("c32");
graph.addVertex("c33");
graph.addVertex("c34");
graph.addVertex("c35");
graph.addVertex("c36");
graph.addVertex("c37");
graph.addVertex("c38");

//.................Adding edges with vertices...........................
graph.addEdge("c1", "c2", 20);
graph.addEdge("c2", "c3", 20);
graph.addEdge("c3", "c4", 20);
graph.addEdge("c4", "c5", 20);
graph.addEdge("c4", "c6", 20);
graph.addEdge("c6", "c14", 20);
graph.addEdge("c6", "c7", 20);
graph.addEdge("c7", "c8", 20);
graph.addEdge("c8", "c9", 20);
graph.addEdge("c9", "c10", 20);
graph.addEdge("c10", "c11", 20);
graph.addEdge("c10", "c12", 20);
graph.addEdge("c11", "c14", 20);
graph.addEdge("c12", "c13", 20);
graph.addEdge("c14", "c3", 20);
graph.addEdge("c14", "c13", 20);
graph.addEdge("c13", "c15", 20);
graph.addEdge("c13", "c21", 20);
graph.addEdge("c15", "c16", 20);
graph.addEdge("c15", "c17", 20);
graph.addEdge("c15", "c19", 20);
graph.addEdge("c17", "c18", 20);
graph.addEdge("c19", "c20", 20);
graph.addEdge("c19", "c21", 20);
graph.addEdge("c21", "c22", 20);
graph.addEdge("c21", "c38", 20);
graph.addEdge("c22", "c23", 20);
graph.addEdge("c23", "c24", 20);
graph.addEdge("c23", "c26", 20);
graph.addEdge("c24", "c25", 20);
graph.addEdge("c25", "c26", 20);
graph.addEdge("c25", "c27", 20);
graph.addEdge("c25", "c28", 20);
graph.addEdge("c28", "c29", 20);
graph.addEdge("c29", "c30", 20);
graph.addEdge("c30", "c31", 20);
graph.addEdge("c31", "c36", 20);
graph.addEdge("c31", "c32", 20);
graph.addEdge("c32", "c33", 20);
graph.addEdge("c33", "c34", 20);
graph.addEdge("c34", "c35", 20);
graph.addEdge("c35", "c36", 20);
graph.addEdge("c35", "c37", 20);
graph.addEdge("c37", "c38", 20);
graph.addEdge("c37", "c1", 20);