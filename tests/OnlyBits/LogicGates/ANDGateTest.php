<?php

use OnlyBits\LogicGates\ANDGate;

class ANDGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateTwoInputProvider
     */
    public function testOutputRespectsANDGateTruthTable($inputs, $out)
    {
        $and = new ANDGate;
        $and->in($inputs);
        $output = $and->out();

        $this->assertEquals($output, $out, "The AND gate output doesn't respect the truth table!");
    }

    public function logicGateTwoInputProvider()
    {
        return [
            [["1"=>false, "2"=>false], false],
            [["1"=>false, "2"=>true], false],
            [["1"=>true, "2"=>false], false],
            [["1"=>true, "2"=>true], true],
        ];
    }
}
