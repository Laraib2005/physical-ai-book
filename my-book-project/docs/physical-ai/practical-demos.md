---
sidebar_position: 3
---

# Practical Demonstrations & Examples

This lesson provides hands-on examples of Physical AI concepts using real-world implementations. Choose your preferred examples using the personalization options above.

import PersonalizationWidget from '@site/src/components/PersonalizationWidget/PersonalizationWidget';

<PersonalizationWidget chapterId="physical-ai-practical" />

## Python Implementation

For Python enthusiasts, here's an example of a simple perception system using OpenCV:

```python
import cv2
import numpy as np

def detect_object(frame):
    """Simple color-based object detection"""
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # Define range for red color
    lower_red = np.array([0, 50, 50])
    upper_red = np.array([10, 255, 255])

    mask = cv2.inRange(hsv, lower_red, upper_red)
    return mask
```

## ROS 2 Integration

ROS 2 is a popular framework for robotics applications. Here's how to set up a simple perception node:

```cpp
#include "rclcpp/rclcpp.hpp"
#include "sensor_msgs/msg/image.hpp"

class PerceptionNode : public rclcpp::Node
{
public:
    PerceptionNode() : Node("perception_node")
    {
        subscription_ = this->create_subscription<sensor_msgs::msg::Image>(
            "camera/image_raw", 10,
            std::bind(&PerceptionNode::image_callback, this, std::placeholders::_1));
    }

private:
    void image_callback(const sensor_msgs::msg::Image::SharedPtr msg)
    {
        // Process image data
        RCLCPP_INFO(this->get_logger(), "Received image with %d bytes",
                   static_cast<int>(msg->data.size()));
    }

    rclcpp::Subscription<sensor_msgs::msg::Image>::SharedPtr subscription_;
};
```

## Simulation Environment

Using Gazebo for simulation allows testing Physical AI algorithms in a safe, reproducible environment:

1. Create a URDF model of your robot
2. Set up the Gazebo world
3. Implement controllers using ROS 2
4. Test perception and planning algorithms

## Unity Robotics Simulation

Unity provides an advanced simulation environment with realistic physics:

- Physics-based simulation with PhysX
- High-fidelity rendering for visual perception
- Multi-platform deployment options
- Integration with ML-Agents for learning

Choose your preferred demonstration type using the personalization options above to see more detailed examples in your chosen technology stack.