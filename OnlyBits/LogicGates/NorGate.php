<?php

namespace OnlyBits\LogicGates;

class NorGate extends LogicGate
{
    public function __construct()
    {
        parent::__construct(2);
    }

    /**
     * {@inheritdoc}
     */
    public function out()
    {
        $this->output = true;

        foreach ($this->inputs as $number => $value) {
            // If there's any true input, the output is false
            if ($value) {
                $this->output = !$value;
                break;
            }
        }

        return $this->output;
    }
}