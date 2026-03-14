const versions = {
  node: process.version,
  npm_user_agent: process.env.npm_config_user_agent || 'unknown'
};
console.log('Environment check');
console.table(versions);
