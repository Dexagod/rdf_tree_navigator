import Condition from './Condition';
import ChildRelation from '../tree/ChildRelation';
import Node from '../tree/Node';
import FollowCondition from './FollowCondition';

export default class StringContainsCondition implements FollowCondition {
    check_condition(node:Node, relation:ChildRelation, child:Node, iterationValue) {
        if (iterationValue.startsWith(child.getValue())){
            return true;
        } 
        return false; 
    }
}