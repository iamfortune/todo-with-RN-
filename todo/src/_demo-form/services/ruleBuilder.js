export default rules =>
  rules.split('|').map(rule => {
    const splits = {}
    if (rule.includes(':')) {
      const split = rule.split(':')
      splits[split[0]] = split[1].split(',')
    } else {
      splits[rule] = true
    }
    return splits
  })
