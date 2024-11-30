const tf = require('@tensorflow/tfjs');

// Create a simple model
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model
model.fit(xs, ys, {epochs: 500}).then(() => {
  // Use the model to predict the next number in the sequence
  model.predict(tf.tensor2d([5], [1, 1])).print();
});

let a = 5;

for (let i = 0; i < 10; i++) {
  console.log(i);
}