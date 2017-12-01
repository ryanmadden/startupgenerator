// You think you're pretty clever, huh?

let prob_for = 0.5;
let prob_av_prefix = 0.1;
let prob_mod_prefix = 0.4;

let adverbs = [
  'Developing',
  'Enhancing',
  'Delivering',
  'Leveraging',
  'Creating',
  'Orchestrating',
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
  'Turing-Complete',
  'Reducible',
  'Social',
];

let disciplines = [
  'Marketing',
  'Organization',
  'Infrastructure',
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
  'File Sharing',
  'Data Pipeline',
];

let targets = [
  'Solutions',
  'Systems',
  'Synergy',
  'Management',
  'Data',
  'SaaS',
  'Analysis',
  'Modeling',
  'Trend Analysis',
  'Applications',
  'JavaScript Frameworks',
  'Tracking',
  'A/B Testing',
  'Development',
  'Mobile Apps',
  'Progressive Web Apps',
  'Databases',
  'Dashboards',
  'Visualizations',
  'Data Mining',
  'Data Analysis',

];

let lastResult = [];

let getUnusedRandom = function(arr, used) {
  let item = arr[Math.floor(Math.random() * arr.length)];
  if (used.indexOf(item) == -1 && lastResult.indexOf(item) == -1) {
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

  lastResult = result;

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
});