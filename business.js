// You think you're pretty clever, huh?

let prob_for = 0.5;
let prob_av_prefix = 0.1;
let prob_mod_prefix = 0.3;

let adverbs = [
  'Developing',
  'Enhancing',
  'Delivering',
  'Leveraging',
  'Creating',
];

let modifiers = [
  'Lean',
  'Optimized',
  'Functional',
  'Digital',
  'Cloud-Based',
  'Integrated',
  'Flat',
  'Efficient',
  'Statically-Typed',
  'Distributed',
  'Human-Centric',
  'Realtime',
  'Persistent',
  'Reactive',
  'Benchmarked',
  'Superior',
  'Structured',
  'Analytical',
  'Secure',
  'Scalable',
  'Interactive',
  'Deployable',
  'Flexible',
  'Decentralized',
  'Multi-Factor Authenticated',
  'Streamlined',
  'Imperative',
  'Remote',
  'High-Availability',
  'On-Demand',
  'Applied',
  'Mobile',
  'Personalized',
  'Adaptable',
  'Modern',
  'Autonomous',
];

let disciplines = [
  'Marketing',
  'Organization',
  'Infrastructure',
  'Medical Marijuana',
  'Machine Learning',
  'Virtual Reality',
  'Accounting',
  'POS',
  'Computer Vision',
  'Grocery Delivery',
  'Pet Tutoring',
  'Drone Delivery',
  'Blockchain',
  'Messaging',
  'E-Commerce',
  'Microservice',
  'IoT',
  'Deep Learning',
  'Quantum Computing',
  'Chatbot',
  'Engagement',
];

let targets = [
  'Solutions',
  'Systems',
  'Synergy',
  'Management',
  'Data',
  'SaaS',
  'Growth Hacking',
  'Analysis',
  'Modeling',
  'Trend Analysis',
  'Data Visualization',
  'Applications',
  'JavaScript Frameworks',
];

let getUnusedRandom = function(arr, used) {
  let item = arr[Math.floor(Math.random() * arr.length)];
  if (used.indexOf(item) == -1) {
    return item;
  }
  else {
    return getUnusedRandom(arr, used);
  }
}

let generateBusinessModel = function() {

  let result = [];

  let mod = getUnusedRandom(modifiers, result);
  let dis = getUnusedRandom(disciplines, result);
  let tar = getUnusedRandom(targets, result);

  result.push(mod, dis, tar);

  if (Math.random() < prob_for) {
   result = [getUnusedRandom(modifiers, result), getUnusedRandom(targets, result), 'for', ...result];
  }

  if (Math.random() < prob_av_prefix) {
    result = [getUnusedRandom(adverbs, result), ...result];
  }
  else if (Math.random() < prob_mod_prefix) {
    result = [getUnusedRandom(modifiers, result), ...result];
  }

  return result.join(' ');
}

let updateText = function() {
  document.getElementById('barf').innerHTML = generateBusinessModel();
}

document.addEventListener('DOMContentLoaded', function(event) {
  updateText();
});

document.getElementById('reroll').addEventListener('click', function(event) {
  updateText();
})

