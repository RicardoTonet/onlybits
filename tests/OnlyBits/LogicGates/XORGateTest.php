<?php

use OnlyBits\LogicGates\XORGate;

class XORGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateTwoInputProvider
     */
    public function testOutputRespectsXORGateTruthTable($inputs, $out)
    {
        $xor = new XORGate;
        $xor->in($inputs);
        $output = $xor->out();

        $this->assertEquals($output, $out, "The XOR gate output doesn't respect the truth table!");
    }

    public function logicGateTwoInputProvider()
    {
        return [
            [["1"=>false, "2"=>false], false],
            [["1"=>false, "2"=>true], true],
            [["1"=>true, "2"=>false], true],
            [["1"=>true, "2"=>true], false],
        ];
    }
}
