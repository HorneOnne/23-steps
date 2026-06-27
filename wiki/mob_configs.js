var MOB_CONFIGS = {
    "MobConfigs": [
        {
            "MobID": "BlueSlime",
            "MobName": "Blue Slime",
            "CustomParameters": {
                "MinJumpDistance": 1.25,
                "MaxJumpDistance": 2,
                "JumpCooldown": 3,
                "JumpSpeed": 5,
                "JumpHeight": 0.25,
                "PrepareDuration": 0.5,
                "LandingPauseDuration": 0.2
            },
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 1,
                "FlightSpeedMultiplier": 1,
                "Damage": 3,
                "AttackRange": 0.5,
                "MoveSpeed": 1,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 5,
                "DeAggressionRange": 15,
                "DetectionRange": 10,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 1,
                        "DropChance": 0.3
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 40,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1,
                "SandStormMultiplier": 1,
                "RainMultiplier": 2,
                "ThunderMultiplier": 1
            }
        },
        {
            "MobID": "GreenSlime",
            "MobName": "Green Slime",
            "CustomParameters": {
                "MinJumpDistance": 1.25,
                "MaxJumpDistance": 2.25,
                "JumpCooldown": 2.5,
                "JumpSpeed": 4,
                "JumpHeight": 0.5,
                "PrepareDuration": 0.5,
                "LandingPauseDuration": 0.2
            },
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.1,
                "KnockbackForce": 2,
                "FlightSpeedMultiplier": 1,
                "Damage": 5,
                "AttackRange": 0.5,
                "MoveSpeed": 1.15,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 5,
                "DeAggressionRange": 16,
                "DetectionRange": 10,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 1,
                        "DropChance": 0.7
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": true,
                "RegenerationRate": 2,
                "MaxHealth": 60,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 4
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1,
                "SandStormMultiplier": 1,
                "RainMultiplier": 2,
                "ThunderMultiplier": 1
            }
        },
        {
            "MobID": "RedSlime",
            "MobName": "Red Slime",
            "CustomParameters": {
                "OnlyJumpMovement": 1,
                "MinJumpDistance": 0.1,
                "MaxJumpDistance": 2,
                "JumpCooldown": 0.5,
                "JumpSpeed": 3,
                "JumpHeight": 2,
                "PrepareDuration": 0.5,
                "LandingPauseDuration": 0.2
            },
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.15,
                "KnockbackForce": 2,
                "FlightSpeedMultiplier": 1,
                "Damage": 7,
                "AttackRange": 0.5,
                "MoveSpeed": 1.3,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 6,
                "DeAggressionRange": 17,
                "DetectionRange": 10,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 1,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 80,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1,
                "SandStormMultiplier": 1,
                "RainMultiplier": 2,
                "ThunderMultiplier": 1
            }
        },
        {
            "MobID": "BlackSlime",
            "MobName": "Black Slime",
            "CustomParameters": {
                "MinJumpDistance": 3,
                "MaxJumpDistance": 3.5,
                "JumpCooldown": 4,
                "JumpSpeed": 4,
                "JumpHeight": 0.2,
                "PrepareDuration": 0.5,
                "LandingPauseDuration": 0.2
            },
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.5,
                "KnockbackForce": 2,
                "FlightSpeedMultiplier": 1,
                "Damage": 20,
                "AttackRange": 0.8,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 8,
                "DeAggressionRange": 20,
                "DetectionRange": 10,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 250,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1,
                "SandStormMultiplier": 1,
                "RainMultiplier": 2,
                "ThunderMultiplier": 1
            }
        },
        {
            "MobID": "TinyBlackSlime",
            "MobName": "Tiny Black Slime",
            "CustomParameters": {
                "MinJumpDistance": 2,
                "MaxJumpDistance": 3,
                "JumpCooldown": 1.5,
                "JumpSpeed": 8,
                "JumpHeight": 0,
                "PrepareDuration": 0.5,
                "LandingPauseDuration": 0.2
            },
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 1.2,
                "FlightSpeedMultiplier": 1,
                "Damage": 8,
                "AttackRange": 0.3,
                "MoveSpeed": 1.4,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4,
                "DeAggressionRange": 12,
                "DetectionRange": 8,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 1,
                        "DropChance": 0.3
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 50,
                "InvulnerabilityDuration": 0.3,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1,
                "SandStormMultiplier": 1,
                "RainMultiplier": 2,
                "ThunderMultiplier": 1
            }
        },
        {
            "MobID": "Orc",
            "MobName": "Orc",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.5,
                "KnockbackForce": 3.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 25,
                "AttackRange": 1.5,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 8,
                "DeAggressionRange": 20,
                "DetectionRange": 15,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 8,
                        "MaxQuantity": 12,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 250,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "ArmoredAxeman",
            "MobName": "Armored Axeman",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.5,
                "KnockbackForce": 3.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 25,
                "AttackRange": 1.5,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 8,
                "DeAggressionRange": 20,
                "DetectionRange": 15,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 8,
                        "MaxQuantity": 12,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 250,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "ArmoredOrc",
            "MobName": "Armored Orc",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.5,
                "KnockbackForce": 3.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 25,
                "AttackRange": 1.5,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 8,
                "DeAggressionRange": 20,
                "DetectionRange": 15,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 8,
                        "MaxQuantity": 12,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 250,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "ArmoredSkeleton",
            "MobName": "Armored Skeleton",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.5,
                "KnockbackForce": 3.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 25,
                "AttackRange": 1.55,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 8,
                "DeAggressionRange": 20,
                "DetectionRange": 15,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 8,
                        "MaxQuantity": 12,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 250,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "EliteOrc",
            "MobName": "Elite Orc",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.5,
                "KnockbackForce": 3.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 25,
                "AttackRange": 1.75,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 8,
                "DeAggressionRange": 20,
                "DetectionRange": 15,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 8,
                        "MaxQuantity": 12,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 250,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Werebear",
            "MobName": "Werebear",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.5,
                "KnockbackForce": 1,
                "FlightSpeedMultiplier": 1,
                "Damage": 25,
                "AttackRange": 1.5,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 8,
                "DeAggressionRange": 20,
                "DetectionRange": 15,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 8,
                        "MaxQuantity": 12,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 250,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Werewolf",
            "MobName": "Werewolf",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.5,
                "KnockbackForce": 3.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 25,
                "AttackRange": 1.75,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 8,
                "DeAggressionRange": 20,
                "DetectionRange": 15,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 8,
                        "MaxQuantity": 12,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 250,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Bloodcap",
            "MobName": "Bloodcap",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.8,
                "FlightSpeedMultiplier": 1,
                "Damage": 8,
                "AttackRange": 1,
                "MoveSpeed": 1.1,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4,
                "DeAggressionRange": 14,
                "DetectionRange": 9,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "mushroom",
                        "MinQuantity": 1,
                        "MaxQuantity": 3,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 80,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Venomcap",
            "MobName": "Venomcap",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.05,
                "KnockbackForce": 0.9,
                "FlightSpeedMultiplier": 1,
                "Damage": 11,
                "AttackRange": 1,
                "MoveSpeed": 1.2,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4.5,
                "DeAggressionRange": 14.5,
                "DetectionRange": 9.5,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "mushroom",
                        "MinQuantity": 1,
                        "MaxQuantity": 3,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": true,
                "RegenerationRate": 1.5,
                "MaxHealth": 110,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 4.5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Gloopcap",
            "MobName": "Gloopcap",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.7,
                "FlightSpeedMultiplier": 1,
                "Damage": 14,
                "AttackRange": 1,
                "MoveSpeed": 1.3,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 3.5,
                "DeAggressionRange": 13.5,
                "DetectionRange": 8.5,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "mushroom",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 140,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Sandworm",
            "MobName": "Sandworm",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 1,
                "KnockbackForce": 1.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 12,
                "AttackRange": 0.7,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 5,
                "DeAggressionRange": 15,
                "DetectionRange": 10,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 2,
                        "MaxQuantity": 4,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 120,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Dirtworm",
            "MobName": "Dirtworm",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 1,
                "KnockbackForce": 5,
                "FlightSpeedMultiplier": 1,
                "Damage": 9,
                "AttackRange": 0.6,
                "MoveSpeed": 1.1,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4,
                "DeAggressionRange": 14,
                "DetectionRange": 9,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 3,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 90,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Pig",
            "MobName": "Pig",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 5,
                "AttackRange": 0.55,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 3,
                "DeAggressionRange": 10,
                "DetectionRange": 5,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 60,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Boar",
            "MobName": "Boar",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 1,
                "KnockbackForce": 7,
                "FlightSpeedMultiplier": 1,
                "Damage": 50,
                "AttackRange": 1.5,
                "MoveSpeed": 1.3,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 6,
                "DeAggressionRange": 17,
                "DetectionRange": 12,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 2,
                        "MaxQuantity": 4,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 4000,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Leaf",
            "MobName": "Leaf",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.3,
                "FlightSpeedMultiplier": 1,
                "Damage": 4,
                "AttackRange": 0.4,
                "MoveSpeed": 1.2,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 2,
                "DeAggressionRange": 11,
                "DetectionRange": 6,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 1,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 40,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Leafer",
            "MobName": "Leafer",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.1,
                "KnockbackForce": 1,
                "FlightSpeedMultiplier": 2,
                "Damage": 10,
                "AttackRange": 5,
                "MoveSpeed": 1.2,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4,
                "DeAggressionRange": 13,
                "DetectionRange": 8,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 80,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Bat",
            "MobName": "Bat",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.2,
                "FlightSpeedMultiplier": 1.5,
                "Damage": 3,
                "AttackRange": 0.4,
                "MoveSpeed": 1.4,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 3,
                "DeAggressionRange": 12,
                "DetectionRange": 7,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 1,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 30,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "TinyBee",
            "MobName": "Tiny Bee",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.1,
                "FlightSpeedMultiplier": 2,
                "Damage": 2,
                "AttackRange": 0.3,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 2,
                "DeAggressionRange": 11,
                "DetectionRange": 6,
                "IsHostileToPlayer": false
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 1,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 25,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "WorkerBee",
            "MobName": "Worker Bee",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.1,
                "KnockbackForce": 0.5,
                "FlightSpeedMultiplier": 2.5,
                "Damage": 6,
                "AttackRange": 0.4,
                "MoveSpeed": 1.4,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4,
                "DeAggressionRange": 13,
                "DetectionRange": 8,
                "IsHostileToPlayer": false
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": true,
                "RegenerationRate": 1,
                "MaxHealth": 50,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 2
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "MechanicalBee",
            "MobName": "Mechanical Bee",
            "MovementConfig": {
                "CanBeStunned": false
            },
            "CombatConfig": {
                "KnockbackResistance": 0.5,
                "KnockbackForce": 1,
                "FlightSpeedMultiplier": 1.8,
                "Damage": 10,
                "AttackRange": 0.5,
                "MoveSpeed": 1,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 5,
                "DeAggressionRange": 15,
                "DetectionRange": 10,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 2,
                        "MaxQuantity": 3,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 80,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "SpiritBee",
            "MobName": "Spirit Bee",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.3,
                "FlightSpeedMultiplier": 3,
                "Damage": 8,
                "AttackRange": 0.3,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4,
                "DeAggressionRange": 14,
                "DetectionRange": 9,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": true,
                "RegenerationRate": 2,
                "MaxHealth": 60,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 3
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "WallCreeper",
            "MobName": "Wall Creeper",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 8,
                "AttackRange": 0.4,
                "MoveSpeed": 1.6,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4,
                "DeAggressionRange": 13,
                "DetectionRange": 8,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 70,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "VileHatcher",
            "MobName": "Vile Hatcher",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.2,
                "KnockbackForce": 1,
                "FlightSpeedMultiplier": 1,
                "Damage": 12,
                "AttackRange": 0.6,
                "MoveSpeed": 1,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 5,
                "DeAggressionRange": 15,
                "DetectionRange": 10,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 2,
                        "MaxQuantity": 4,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 100,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "WebSpinner",
            "MobName": "Web Spinner",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 6,
                "AttackRange": 0.5,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 3,
                "DeAggressionRange": 12,
                "DetectionRange": 7,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 60,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Carapace",
            "MobName": "Carapace",
            "MovementConfig": {
                "CanBeStunned": false
            },
            "CombatConfig": {
                "KnockbackResistance": 0.8,
                "KnockbackForce": 2,
                "FlightSpeedMultiplier": 1,
                "Damage": 15,
                "AttackRange": 0.7,
                "MoveSpeed": 1,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 6,
                "DeAggressionRange": 17,
                "DetectionRange": 12,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 3,
                        "MaxQuantity": 5,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 150,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "NightfangWeaver",
            "MobName": "Nightfang Weaver",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.1,
                "KnockbackForce": 1,
                "FlightSpeedMultiplier": 1,
                "Damage": 10,
                "AttackRange": 0.5,
                "MoveSpeed": 1,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4,
                "DeAggressionRange": 14,
                "DetectionRange": 9,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 2,
                        "MaxQuantity": 3,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": true,
                "RegenerationRate": 1.5,
                "MaxHealth": 90,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 4
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Ghost",
            "MobName": "Ghost",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.5,
                "FlightSpeedMultiplier": 1.5,
                "Damage": 12,
                "AttackRange": 0.4,
                "MoveSpeed": 1.3,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 5,
                "DeAggressionRange": 15,
                "DetectionRange": 10,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 80,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Snowman",
            "MobName": "Snowman",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.2,
                "KnockbackForce": 1.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 10,
                "AttackRange": 0.6,
                "MoveSpeed": 1,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4,
                "DeAggressionRange": 13,
                "DetectionRange": 8,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 2,
                        "MaxQuantity": 3,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 100,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Penguin",
            "MobName": "Penguin",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 4,
                "AttackRange": 0.4,
                "MoveSpeed": 1.5,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 3,
                "DeAggressionRange": 10,
                "DetectionRange": 5,
                "IsHostileToPlayer": false
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 1,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 50,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Vulture",
            "MobName": "Vulture",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 0.8,
                "FlightSpeedMultiplier": 2,
                "Damage": 8,
                "AttackRange": 0.5,
                "MoveSpeed": 1,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 4,
                "DeAggressionRange": 14,
                "DetectionRange": 9,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 60,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Zombie",
            "MobName": "Zombie",
            "MovementConfig": {
                "CanBeStunned": true
            },
            "CombatConfig": {
                "KnockbackResistance": 0.2,
                "KnockbackForce": 2,
                "FlightSpeedMultiplier": 1,
                "Damage": 14,
                "AttackRange": 1,
                "MoveSpeed": 1.2,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 5,
                "DeAggressionRange": 16,
                "DetectionRange": 12,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 2,
                        "DropChance": 0.6
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 0,
                "MaxHealth": 500,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 0
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "PrinceSlime",
            "MobName": "Prince Slime",
            "CustomParameters": {
                "MinJumpDistance": 3,
                "MaxJumpDistance": 4,
                "JumpCooldown": 3,
                "JumpSpeed": 5,
                "JumpHeight": 0,
                "PrepareDuration": 0.5,
                "LandingPauseDuration": 0.2
            },
            "MovementConfig": {
                "CanBeStunned": false
            },
            "CombatConfig": {
                "KnockbackResistance": 0.9,
                "KnockbackForce": 0.5,
                "FlightSpeedMultiplier": 2,
                "Damage": 10,
                "AttackRange": 1.25,
                "MoveSpeed": 1.4,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 10,
                "DeAggressionRange": 75,
                "DetectionRange": 10,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 4,
                        "MaxQuantity": 8,
                        "DropChance": 1
                    },
                    {
                        "ItemID": "slimeling_core",
                        "MinQuantity": 1,
                        "MaxQuantity": 1,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": true,
                "RegenerationRate": 5,
                "MaxHealth": 500,
                "InvulnerabilityDuration": 0.5,
                "RegenerationDelay": 2
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1,
                "SandStormMultiplier": 1,
                "RainMultiplier": 2,
                "ThunderMultiplier": 1
            }
        },
        {
            "MobID": "ShroomletTyrant",
            "MobName": "Shroomlet Tyrant",
            "MovementConfig": {
                "CanBeStunned": false
            },
            "CombatConfig": {
                "KnockbackResistance": 0.9,
                "KnockbackForce": 0.5,
                "FlightSpeedMultiplier": 2,
                "Damage": 16,
                "AttackRange": 1.25,
                "MoveSpeed": 1.4,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 10,
                "DeAggressionRange": 75,
                "DetectionRange": 10,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 50,
                        "MaxQuantity": 100,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": true,
                "RegenerationRate": 5,
                "MaxHealth": 1000,
                "InvulnerabilityDuration": 0.5,
                "RegenerationDelay": 2
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Centipede",
            "MobName": "Centipede",
            "MovementConfig": {
                "CanBeStunned": false
            },
            "CombatConfig": {
                "KnockbackResistance": 1,
                "KnockbackForce": 1,
                "FlightSpeedMultiplier": 1,
                "Damage": 45,
                "AttackRange": 1.5,
                "MoveSpeed": 1.6,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 10,
                "DeAggressionRange": 75,
                "DetectionRange": 50,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 40,
                        "MaxQuantity": 80,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": true,
                "RegenerationRate": 4,
                "MaxHealth": 1800,
                "InvulnerabilityDuration": 0.3,
                "RegenerationDelay": 3
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Vinefang",
            "MobName": "Vinefang",
            "MovementConfig": {
                "CanBeStunned": false
            },
            "CombatConfig": {
                "KnockbackResistance": 0.4,
                "KnockbackForce": 1.5,
                "FlightSpeedMultiplier": 1,
                "Damage": 0.35,
                "AttackRange": 1,
                "MoveSpeed": 1.4,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 0,
                "DeAggressionRange": 20,
                "DetectionRange": 1,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 1,
                        "MaxQuantity": 3,
                        "DropChance": 0.8
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": true,
                "RegenerationRate": 3,
                "MaxHealth": 900,
                "InvulnerabilityDuration": 0.3,
                "RegenerationDelay": 3
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Thorncoil",
            "MobName": "Thorncoil",
            "MovementConfig": {
                "CanBeStunned": false
            },
            "CombatConfig": {
                "KnockbackResistance": 0.8,
                "KnockbackForce": 2,
                "FlightSpeedMultiplier": 1,
                "Damage": 60,
                "AttackRange": 1.8,
                "MoveSpeed": 1.2,
                "Defense": 0,
                "AttackSpeed": 1
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 12,
                "DeAggressionRange": 90,
                "DetectionRange": 60,
                "IsHostileToPlayer": true
            },
            "LootConfig": {
                "DropsLoot": true,
                "LootDrops": [
                    {
                        "ItemID": "gel",
                        "MinQuantity": 2,
                        "MaxQuantity": 5,
                        "DropChance": 1
                    }
                ]
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 2,
                "MaxHealth": 2200,
                "InvulnerabilityDuration": 0.4,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1.1,
                "SandStormMultiplier": 1.2,
                "RainMultiplier": 1.1,
                "ThunderMultiplier": 1.2
            }
        },
        {
            "MobID": "Merchant",
            "MobName": "Merchant",
            "CombatConfig": {
                "FlightSpeedMultiplier": 1,
                "Damage": 15,
                "KnockbackForce": 5,
                "KnockbackResistance": 0.5,
                "AttackSpeed": 1.5,
                "Defense": 5,
                "MoveSpeed": 3,
                "AttackRange": 8
            },
            "MovementConfig": {
                "CanBeStunned": true
            },
            "HealthConfig": {
                "CanRegenerate": true,
                "RegenerationRate": 2,
                "InvulnerabilityDuration": 0.5,
                "MaxHealth": 250,
                "RegenerationDelay": 5
            },
            "AIConfig": {
                "PatrolRadius": 5,
                "IsHostileToPlayer": false,
                "DetectionRange": 10,
                "DeAggressionRange": 15
            },
            "LootConfig": {
                "LootDrops": [],
                "DropsLoot": false
            },
            "WeatherLoot": {
                "SnowDrop": "none",
                "DropChance": 0,
                "ThunderDrop": "none",
                "RainDrop": "none",
                "SandStormDrop": "none"
            },
            "CustomParameters": {}
        },
        {
            "MobID": "Porklet",
            "MobName": "Porklet",
            "MovementConfig": {
                "CanBeStunned": false
            },
            "CombatConfig": {
                "KnockbackResistance": 0,
                "KnockbackForce": 2,
                "FlightSpeedMultiplier": 1,
                "Damage": 10,
                "AttackRange": 0.75,
                "MoveSpeed": 1.75,
                "Defense": 0,
                "AttackSpeed": 2
            },
            "WeatherLoot": {
                "DropChance": 0,
                "SandStormDrop": "none",
                "ThunderDrop": "none",
                "SnowDrop": "none",
                "RainDrop": "none"
            },
            "AIConfig": {
                "PatrolRadius": 5,
                "DeAggressionRange": 15,
                "DetectionRange": 10,
                "IsHostileToPlayer": false
            },
            "LootConfig": {
                "DropsLoot": false,
                "LootDrops": []
            },
            "HealthConfig": {
                "CanRegenerate": false,
                "RegenerationRate": 1,
                "MaxHealth": 99999,
                "InvulnerabilityDuration": 0.1,
                "RegenerationDelay": 5
            },
            "WeatherModifiers": {
                "SnowMultiplier": 1,
                "SandStormMultiplier": 1,
                "RainMultiplier": 1,
                "ThunderMultiplier": 1
            },
            "CustomParameters": {}
        }
    ]
};
