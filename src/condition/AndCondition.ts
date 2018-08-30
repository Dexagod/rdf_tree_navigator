import Condition from './Condition';

export default class AndCondition implements Condition{
    left: Condition;
    right: Condition;
    constructor(left:Condition, right:Condition){
        this.left = left;
        this.right = right;
    }
    check_condition(node, relation, child, iterationValue){
        return this.left.check_condition(node, relation, child, iterationValue) &&
         this.right.check_condition(node, relation, child, iterationValue);
    }
}