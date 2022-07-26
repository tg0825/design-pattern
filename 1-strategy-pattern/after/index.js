// 전략 클라이언트
var Strategy = (function () {
  // constructor
  function Strategy() {
    this.strategy = null;
  }

  Strategy.prototype.setStrategy = function (strategy) {
    this.strategy = strategy;
  }

  Strategy.prototype.execute = function () {
    this.strategy.execute();
  }

  return Strategy;
})();

// 전략 종류 배로.
var ShipStrategy = (function () {
  // Constructor
  function ShipStrategy() {

  }

  ShipStrategy.prototype.execute = function () {
    console.log('배로 가자!');
  }

  return ShipStrategy;
})();

// 전략 종류 육로로.
var LandStrategy = (function () {
  function LandStrategy() {

  }

  LandStrategy.prototype.execute = function () {
    console.log('육로로 가자!');
  }

  return LandStrategy;
})();

var strat = new Strategy();
var ship = new ShipStrategy();
var land = new LandStrategy();

// 배로 가려다가
strat.setStrategy(ship);
// 전략을 바꿔서 육로로 감
strat.setStrategy(land);

// 셋팅 된 전략으로 실행
strat.execute();