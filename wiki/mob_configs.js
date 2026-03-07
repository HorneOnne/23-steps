var MOB_CONFIGS = {
  "MobConfigs": [
    {
      "MobID": "BlueSlime",
      "MobName": "Blue Slime",
      "HealthConfig": {
        "MaxHealth": 100.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 10.0,
        "MoveSpeed": 1.0,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 0.5,
        "KnockbackForce": 1.0,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 10.0,
        "DeAggressionRange": 15.0,
        "PatrolRadius": 5.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 2,
            "MaxQuantity": 4,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "GreenSlime",
      "MobName": "Green Slime",
      "HealthConfig": {
        "MaxHealth": 120.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": true,
        "RegenerationRate": 2.0,
        "RegenerationDelay": 4.0
      },
      "CombatConfig": {
        "Damage": 12.0,
        "MoveSpeed": 1.2,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 0.5,
        "KnockbackForce": 2.0,
        "KnockbackResistance": 0.1
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 10.0,
        "DeAggressionRange": 16.0,
        "PatrolRadius": 5.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 3,
            "MaxQuantity": 5,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "RedSlime",
      "MobName": "Red Slime",
      "HealthConfig": {
        "MaxHealth": 140.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 14.0,
        "MoveSpeed": 1.3,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 0.5,
        "KnockbackForce": 2.0,
        "KnockbackResistance": 0.15
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 10.0,
        "DeAggressionRange": 17.0,
        "PatrolRadius": 6.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 4,
            "MaxQuantity": 6,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "BlackSlime",
      "MobName": "Black Slime",
      "HealthConfig": {
        "MaxHealth": 250.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 20.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 0.8,
        "AttackRange": 0.8,
        "KnockbackForce": 2.0,
        "KnockbackResistance": 0.5
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 10.0,
        "DeAggressionRange": 20.0,
        "PatrolRadius": 8.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 8,
            "MaxQuantity": 12,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "TinyBlackSlime",
      "MobName": "Tiny Black Slime",
      "HealthConfig": {
        "MaxHealth": 50.0,
        "InvulnerabilityDuration": 0.3,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 8.0,
        "MoveSpeed": 1.4,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.5,
        "AttackRange": 0.3,
        "KnockbackForce": 1.2,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 8.0,
        "DeAggressionRange": 12.0,
        "PatrolRadius": 4.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Orc",
      "MobName": "Orc",
      "HealthConfig": {
        "MaxHealth": 250.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 25.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 1.5,
        "KnockbackForce": 3.5,
        "KnockbackResistance": 0.5
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 15.0,
        "DeAggressionRange": 20.0,
        "PatrolRadius": 8.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 8,
            "MaxQuantity": 12,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "ArmoredAxeman",
      "MobName": "Armored Axeman",
      "HealthConfig": {
        "MaxHealth": 250.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 25.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 1.5,
        "KnockbackForce": 3.5,
        "KnockbackResistance": 0.5
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 15.0,
        "DeAggressionRange": 20.0,
        "PatrolRadius": 8.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 8,
            "MaxQuantity": 12,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "ArmoredOrc",
      "MobName": "Armored Orc",
      "HealthConfig": {
        "MaxHealth": 250.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 25.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 1.5,
        "KnockbackForce": 3.5,
        "KnockbackResistance": 0.5
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 15.0,
        "DeAggressionRange": 20.0,
        "PatrolRadius": 8.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 8,
            "MaxQuantity": 12,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "ArmoredSkeleton",
      "MobName": "Armored Skeleton",
      "HealthConfig": {
        "MaxHealth": 250.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 25.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 1.55,
        "KnockbackForce": 3.5,
        "KnockbackResistance": 0.5
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 15.0,
        "DeAggressionRange": 20.0,
        "PatrolRadius": 8.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 8,
            "MaxQuantity": 12,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "EliteOrc",
      "MobName": "Elite Orc",
      "HealthConfig": {
        "MaxHealth": 250.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 25.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 1.75,
        "KnockbackForce": 3.5,
        "KnockbackResistance": 0.5
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 15.0,
        "DeAggressionRange": 20.0,
        "PatrolRadius": 8.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 8,
            "MaxQuantity": 12,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Werebear",
      "MobName": "Werebear",
      "HealthConfig": {
        "MaxHealth": 250.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 25.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 1.5,
        "KnockbackForce": 1.0,
        "KnockbackResistance": 0.5
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 15.0,
        "DeAggressionRange": 20.0,
        "PatrolRadius": 8.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 8,
            "MaxQuantity": 12,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Werewolf",
      "MobName": "Werewolf",
      "HealthConfig": {
        "MaxHealth": 250.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 25.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 1.75,
        "KnockbackForce": 3.5,
        "KnockbackResistance": 0.5
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 15.0,
        "DeAggressionRange": 20.0,
        "PatrolRadius": 8.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 8,
            "MaxQuantity": 12,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Bloodcap",
      "MobName": "Bloodcap",
      "HealthConfig": {
        "MaxHealth": 80.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 8.0,
        "MoveSpeed": 1.2,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 1.0,
        "KnockbackForce": 0.8,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 9.0,
        "DeAggressionRange": 14.0,
        "PatrolRadius": 4.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Mushroom",
            "MinQuantity": 1,
            "MaxQuantity": 3,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Venomcap",
      "MobName": "Venomcap",
      "HealthConfig": {
        "MaxHealth": 85.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": true,
        "RegenerationRate": 1.5,
        "RegenerationDelay": 4.5
      },
      "CombatConfig": {
        "Damage": 9.0,
        "MoveSpeed": 1.3,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.1,
        "AttackRange": 1.0,
        "KnockbackForce": 0.9,
        "KnockbackResistance": 0.05
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 9.5,
        "DeAggressionRange": 14.5,
        "PatrolRadius": 4.5
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Mushroom",
            "MinQuantity": 1,
            "MaxQuantity": 3,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Gloopcap",
      "MobName": "Gloopcap",
      "HealthConfig": {
        "MaxHealth": 200.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 7.0,
        "MoveSpeed": 1.0,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.2,
        "AttackRange": 1.0,
        "KnockbackForce": 0.7,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 8.5,
        "DeAggressionRange": 13.5,
        "PatrolRadius": 3.5
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Mushroom",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Sandworm",
      "MobName": "Sandworm",
      "HealthConfig": {
        "MaxHealth": 120.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 12.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 0.9,
        "AttackRange": 0.7,
        "KnockbackForce": 1.5,
        "KnockbackResistance": 1
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 10.0,
        "DeAggressionRange": 15.0,
        "PatrolRadius": 5.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 2,
            "MaxQuantity": 4,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Dirtworm",
      "MobName": "Dirtworm",
      "HealthConfig": {
        "MaxHealth": 90.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 9.0,
        "MoveSpeed": 1.1,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 0.6,
        "KnockbackForce": 5.0,
        "KnockbackResistance": 1
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 9.0,
        "DeAggressionRange": 14.0,
        "PatrolRadius": 4.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 3,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Pig",
      "MobName": "Pig",
      "HealthConfig": {
        "MaxHealth": 60.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 5.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 0.55,
        "KnockbackForce": 0.5,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 5.0,
        "DeAggressionRange": 10.0,
        "PatrolRadius": 3.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Boar",
      "MobName": "Boar",
      "HealthConfig": {
        "MaxHealth": 4000.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 50.0,
        "MoveSpeed": 1.3,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 0.5,
        "AttackRange": 1.5,
        "KnockbackForce": 7.0,
        "KnockbackResistance": 1.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 12.0,
        "DeAggressionRange": 17.0,
        "PatrolRadius": 6.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 2,
            "MaxQuantity": 4,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Leaf",
      "MobName": "Leaf",
      "HealthConfig": {
        "MaxHealth": 40.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 4.0,
        "MoveSpeed": 1.2,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 0.4,
        "KnockbackForce": 0.3,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 6.0,
        "DeAggressionRange": 11.0,
        "PatrolRadius": 2.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 1,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Leafer",
      "MobName": "Leafer",
      "HealthConfig": {
        "MaxHealth": 80.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 10.0,
        "MoveSpeed": 1.2,
        "FlightSpeedMultiplier": 2.0,
        "Defense": 0.0,
        "AttackSpeed": 0.2,
        "AttackRange": 5.0,
        "KnockbackForce": 1.0,
        "KnockbackResistance": 0.1
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 8.0,
        "DeAggressionRange": 13.0,
        "PatrolRadius": 4.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Bat",
      "MobName": "Bat",
      "HealthConfig": {
        "MaxHealth": 30.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 3.0,
        "MoveSpeed": 1.4,
        "FlightSpeedMultiplier": 1.5,
        "Defense": 0.0,
        "AttackSpeed": 0.2,
        "AttackRange": 0.4,
        "KnockbackForce": 0.2,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 7.0,
        "DeAggressionRange": 12.0,
        "PatrolRadius": 3.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 1,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "TinyBee",
      "MobName": "Tiny Bee",
      "HealthConfig": {
        "MaxHealth": 25.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 2.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 2.0,
        "Defense": 0.0,
        "AttackSpeed": 0.1,
        "AttackRange": 0.3,
        "KnockbackForce": 0.1,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": false,
        "DetectionRange": 6.0,
        "DeAggressionRange": 11.0,
        "PatrolRadius": 2.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 1,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "WorkerBee",
      "MobName": "Worker Bee",
      "HealthConfig": {
        "MaxHealth": 50.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": true,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 2.0
      },
      "CombatConfig": {
        "Damage": 6.0,
        "MoveSpeed": 1.4,
        "FlightSpeedMultiplier": 2.5,
        "Defense": 0.0,
        "AttackSpeed": 1.2,
        "AttackRange": 0.4,
        "KnockbackForce": 0.5,
        "KnockbackResistance": 0.1
      },
      "AIConfig": {
        "IsHostileToPlayer": false,
        "DetectionRange": 8.0,
        "DeAggressionRange": 13.0,
        "PatrolRadius": 4.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "MechanicalBee",
      "MobName": "Mechanical Bee",
      "HealthConfig": {
        "MaxHealth": 80.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 10.0,
        "MoveSpeed": 1.0,
        "FlightSpeedMultiplier": 1.8,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 0.5,
        "KnockbackForce": 1.0,
        "KnockbackResistance": 0.5
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 10.0,
        "DeAggressionRange": 15.0,
        "PatrolRadius": 5.0
      },
      "MovementConfig": {
        "CanBeStunned": false
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 2,
            "MaxQuantity": 3,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "SpiritBee",
      "MobName": "Spirit Bee",
      "HealthConfig": {
        "MaxHealth": 60.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": true,
        "RegenerationRate": 2.0,
        "RegenerationDelay": 3.0
      },
      "CombatConfig": {
        "Damage": 8.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 3.0,
        "Defense": 0.0,
        "AttackSpeed": 1.5,
        "AttackRange": 0.3,
        "KnockbackForce": 0.3,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 9.0,
        "DeAggressionRange": 14.0,
        "PatrolRadius": 4.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "WallCreeper",
      "MobName": "Wall Creeper",
      "HealthConfig": {
        "MaxHealth": 70.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 8.0,
        "MoveSpeed": 1.6,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.5,
        "AttackRange": 0.4,
        "KnockbackForce": 0.5,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 8.0,
        "DeAggressionRange": 13.0,
        "PatrolRadius": 4.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "VileHatcher",
      "MobName": "Vile Hatcher",
      "HealthConfig": {
        "MaxHealth": 100.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 12.0,
        "MoveSpeed": 1.0,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 0.8,
        "AttackRange": 0.6,
        "KnockbackForce": 1.0,
        "KnockbackResistance": 0.2
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 10.0,
        "DeAggressionRange": 15.0,
        "PatrolRadius": 5.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 2,
            "MaxQuantity": 4,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "WebSpinner",
      "MobName": "Web Spinner",
      "HealthConfig": {
        "MaxHealth": 60.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 6.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 0.5,
        "KnockbackForce": 0.5,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 7.0,
        "DeAggressionRange": 12.0,
        "PatrolRadius": 3.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Carapace",
      "MobName": "Carapace",
      "HealthConfig": {
        "MaxHealth": 150.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 15.0,
        "MoveSpeed": 1.0,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 0.8,
        "AttackRange": 0.7,
        "KnockbackForce": 2.0,
        "KnockbackResistance": 0.8
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 12.0,
        "DeAggressionRange": 17.0,
        "PatrolRadius": 6.0
      },
      "MovementConfig": {
        "CanBeStunned": false
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 3,
            "MaxQuantity": 5,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "NightfangWeaver",
      "MobName": "Nightfang Weaver",
      "HealthConfig": {
        "MaxHealth": 90.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": true,
        "RegenerationRate": 1.5,
        "RegenerationDelay": 4.0
      },
      "CombatConfig": {
        "Damage": 10.0,
        "MoveSpeed": 1.0,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.2,
        "AttackRange": 0.5,
        "KnockbackForce": 1.0,
        "KnockbackResistance": 0.1
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 9.0,
        "DeAggressionRange": 14.0,
        "PatrolRadius": 4.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 2,
            "MaxQuantity": 3,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Ghost",
      "MobName": "Ghost",
      "HealthConfig": {
        "MaxHealth": 80.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 12.0,
        "MoveSpeed": 1.3,
        "FlightSpeedMultiplier": 1.5,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 0.4,
        "KnockbackForce": 0.5,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 10.0,
        "DeAggressionRange": 15.0,
        "PatrolRadius": 5.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Snowman",
      "MobName": "Snowman",
      "HealthConfig": {
        "MaxHealth": 100.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 10.0,
        "MoveSpeed": 1.0,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 0.8,
        "AttackRange": 0.6,
        "KnockbackForce": 1.5,
        "KnockbackResistance": 0.2
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 8.0,
        "DeAggressionRange": 13.0,
        "PatrolRadius": 4.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 2,
            "MaxQuantity": 3,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Penguin",
      "MobName": "Penguin",
      "HealthConfig": {
        "MaxHealth": 50.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 4.0,
        "MoveSpeed": 1.5,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 0.4,
        "KnockbackForce": 0.5,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": false,
        "DetectionRange": 5.0,
        "DeAggressionRange": 10.0,
        "PatrolRadius": 3.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 1,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Vulture",
      "MobName": "Vulture",
      "HealthConfig": {
        "MaxHealth": 60.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 1.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 8.0,
        "MoveSpeed": 1.0,
        "FlightSpeedMultiplier": 2.0,
        "Defense": 0.0,
        "AttackSpeed": 1.2,
        "AttackRange": 0.5,
        "KnockbackForce": 0.8,
        "KnockbackResistance": 0.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 9.0,
        "DeAggressionRange": 14.0,
        "PatrolRadius": 4.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Zombie",
      "MobName": "Zombie",
      "HealthConfig": {
        "MaxHealth": 500.0,
        "InvulnerabilityDuration": 0.1,
        "CanRegenerate": false,
        "RegenerationRate": 0.0,
        "RegenerationDelay": 0.0
      },
      "CombatConfig": {
        "Damage": 14.0,
        "MoveSpeed": 1.2,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.0,
        "AttackRange": 1.0,
        "KnockbackForce": 2.0,
        "KnockbackResistance": 0.2
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 12.0,
        "DeAggressionRange": 16.0,
        "PatrolRadius": 5.0
      },
      "MovementConfig": {
        "CanBeStunned": true
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 2,
            "DropChance": 0.6
          }
        ]
      }
    },
    {
      "MobID": "PrinceSlime",
      "MobName": "Prince Slime",
      "HealthConfig": {
        "MaxHealth": 500.0,
        "InvulnerabilityDuration": 0.5,
        "CanRegenerate": true,
        "RegenerationRate": 5.0,
        "RegenerationDelay": 2.0
      },
      "CombatConfig": {
        "Damage": 20.0,
        "MoveSpeed": 1.4,
        "FlightSpeedMultiplier": 2.0,
        "Defense": 0.0,
        "AttackSpeed": 1.5,
        "AttackRange": 1.25,
        "KnockbackForce": 0.5,
        "KnockbackResistance": 0.9
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 10.0,
        "DeAggressionRange": 75.0,
        "PatrolRadius": 10.0
      },
      "MovementConfig": {
        "CanBeStunned": false
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 50,
            "MaxQuantity": 100,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "ShroomletTyrant",
      "MobName": "Shroomlet Tyrant",
      "HealthConfig": {
        "MaxHealth": 1000.0,
        "InvulnerabilityDuration": 0.5,
        "CanRegenerate": true,
        "RegenerationRate": 5.0,
        "RegenerationDelay": 2.0
      },
      "CombatConfig": {
        "Damage": 2.0,
        "MoveSpeed": 1.4,
        "FlightSpeedMultiplier": 2.0,
        "Defense": 0.0,
        "AttackSpeed": 1.5,
        "AttackRange": 1.25,
        "KnockbackForce": 0.5,
        "KnockbackResistance": 0.9
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 10.0,
        "DeAggressionRange": 75.0,
        "PatrolRadius": 10.0
      },
      "MovementConfig": {
        "CanBeStunned": false
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 50,
            "MaxQuantity": 100,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Centipede",
      "MobName": "Centipede",
      "HealthConfig": {
        "MaxHealth": 1800.0,
        "InvulnerabilityDuration": 0.3,
        "CanRegenerate": true,
        "RegenerationRate": 4.0,
        "RegenerationDelay": 3.0
      },
      "CombatConfig": {
        "Damage": 45.0,
        "MoveSpeed": 1.6,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 2.0,
        "AttackRange": 1.5,
        "KnockbackForce": 1.0,
        "KnockbackResistance": 1.0
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 50.0,
        "DeAggressionRange": 75.0,
        "PatrolRadius": 10.0
      },
      "MovementConfig": {
        "CanBeStunned": false
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 40,
            "MaxQuantity": 80,
            "DropChance": 1.0
          }
        ]
      }
    },
    {
      "MobID": "Vinefang",
      "MobName": "Vinefang",
      "HealthConfig": {
        "MaxHealth": 900.0,
        "InvulnerabilityDuration": 0.3,
        "CanRegenerate": true,
        "RegenerationRate": 3.0,
        "RegenerationDelay": 3.0
      },
      "CombatConfig": {
        "Damage": 0.35,
        "MoveSpeed": 1.4,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.5,
        "AttackRange": 1.0,
        "KnockbackForce": 1.5,
        "KnockbackResistance": 0.4
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 1.0,
        "DeAggressionRange": 20.0,
        "PatrolRadius": 0.0
      },
      "MovementConfig": {
        "CanBeStunned": false
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 1,
            "MaxQuantity": 3,
            "DropChance": 0.8
          }
        ]
      }
    },
    {
      "MobID": "Thorncoil",
      "MobName": "Thorncoil",
      "HealthConfig": {
        "MaxHealth": 2200.0,
        "InvulnerabilityDuration": 0.4,
        "CanRegenerate": false,
        "RegenerationRate": 2.0,
        "RegenerationDelay": 5.0
      },
      "CombatConfig": {
        "Damage": 60.0,
        "MoveSpeed": 1.2,
        "FlightSpeedMultiplier": 1.0,
        "Defense": 0.0,
        "AttackSpeed": 1.2,
        "AttackRange": 1.8,
        "KnockbackForce": 2.0,
        "KnockbackResistance": 0.8
      },
      "AIConfig": {
        "IsHostileToPlayer": true,
        "DetectionRange": 60.0,
        "DeAggressionRange": 90.0,
        "PatrolRadius": 12.0
      },
      "MovementConfig": {
        "CanBeStunned": false
      },
      "LootConfig": {
        "DropsLoot": true,
        "LootDrops": [
          {
            "ItemID": "Gel",
            "MinQuantity": 2,
            "MaxQuantity": 5,
            "DropChance": 1.0
          }
        ]
      }
    }
  ]
};
